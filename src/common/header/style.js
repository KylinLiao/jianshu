import styled from 'styled-components';
import logoImg from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #e7e7e7;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url('${logoImg}');
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding 0 15px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right
    }
    &.active {
        color:#ea6f5a;
    }
`;
export const SearchWraper = styled.div`
    position:relative;
    float:left;
    .iconfont { 
        position:absolute;
        bottom:4px;
        right:5px;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused {
            background-color:#777;
            color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 20px;
    margin-top:9px;
    margin-left:20px;
    border-radius:19px;
    border:none;
    outline:none;
    background:#eee;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:200px;
    }
    .slide-enter {
        transition:all .2s ease-out;
    }
    .slide-enter-active {
        width:200px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;

`;

export const Button = styled.div`
    width:80px;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    border-radius:19px;
    float:right;
    border:1px solid #ea6f5a;
    font-size:15px;
    text-align:center;
    &.reg {
        color:#ea6f5a
    }
    &.writting {
        color:#fff;
        background-color:#ea6f5a;
        .iconfont {
            margin-right:5px;
            text-align:center;
        }
    }
`;