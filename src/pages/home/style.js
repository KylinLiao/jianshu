import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    margin-top:20px;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    width:625px;
    float:left;
    margin-top:5px;
    .banner {
        display:block;
        width:625px;
        height:270px;
        border-radius:5px;
    }
`;

export const HomeRight = styled.div`
    width:24opx;
    float:right;
`;

export const ListWrapper = styled.div`
    margin-top:10px;
`;

export const ItemWrapper = styled.div`
    width:100%;
    margin-top:10px;
    border-bottom:1px solid #f0f0f0;
    overflow:hidden;
    .item-pic {
        display:inline-block;
        float:right;
        width:150px;
        height:100px;
    }
`;

export const ItemContent = styled.div`
    width:425px;
    display:inline-block;
    margin-top:10px;
`;

export const ItemDesc= styled.div`
    font-size:13px;
    line-height:22px;
    color:#999;
    overflow:hidden;

`;

export const ItemTitle = styled.h3`
    font-size:18px;
    margin 5px 0;
    font-weight:blod;
`;

export const ItemInfo = styled.div`
    margin:5px;
    color:#b4b4b4;
    font-size:12px;
    .diamond {
        color:#ea6f5a!important
    }
    
`;
export const ItemDetail = styled.span`
    margin:5px 15px 5px 0;
`;
