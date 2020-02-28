import React  from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper,
    Logo,
    Nav ,
    NavItem,
    SearchWraper,
    NavSearch,
    Addition,
    Button
} from './style'

const Header = (props) => {
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
                        in = {props.focused}
                        timeout = {200}
                        classNames = "slide"
                    >
                            <NavSearch 
                                className = {props.focused === true?'focused':''}
                                onFocus = {props.searchFocus}
                                onBlur = {props.searchBlur}
                            >
                            </NavSearch>
                    </CSSTransition>
                    <span className={props.focused === true ? 'iconfont focused':'iconfont'}>&#xe62b;</span>
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


const mapStateToProps = (state) =>{
    return {
        focused:state.focused
    };
}

const mapDispathToProps = (dispatch) => {
    return {
        searchFocus() {
            const action = {
                type:"search_focus"
            }
            dispatch(action);
        },
        searchBlur() {
            const action = {
                type:"search_blur"
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);