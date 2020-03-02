import React,{ Component }  from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav ,
    NavItem,
    SearchWraper,
    SearchInfo,
    SearchItem,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {

    getSearchInfo() {
        if (this.props.focused) {
            return (
                <SearchInfo >
                    {
                        this.props.list.map((item)=>{
                            return (
                                <SearchItem key={item}>
                                {item}
                                </SearchItem>
                            )
                        })
                    }
            </SearchInfo>
            );
        }
        return null;
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWraper>
                        <CSSTransition
                            in = {this.props.focused}
                            timeout = {200}
                            classNames = "slide"
                        >
                                <NavSearch
                                    className = {this.props.focused === true?'focused':''}
                                    onFocus = {this.props.searchFocus}
                                    onBlur = {this.props.searchBlur}
                                >
                                </NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused === true ? 'iconfont focused':'iconfont'}>&#xe62b;</span>
                        { this.getSearchInfo() }
                    </SearchWraper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span className="iconfont">&#xe624;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list')
    };
}

const mapDispathToProps = (dispatch) => {
    return {
        searchFocus() {
          
            dispatch(actionCreators.searchHistory());
            dispatch(actionCreators.searchFocus());
        },
        searchBlur() {
            dispatch(actionCreators.searchFocus());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
