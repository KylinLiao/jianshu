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
    width:290px;
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
    .number {
        text-align:center;
        margin-left:2px;
    }
`;
export const ItemDetail = styled.span`
    margin:5px 15px 5px 0;
    text-align:center;
`;

export const SpecialWrapper = styled.div`
    height:200px;
`;

export const SpecialItem = styled.div`
    height:50px;
    margin:5px;
    background-size:contain;
    .item-img {
        height:50px;
    }
`;

export const WriterWrapper = styled.div`
    height:300px;
    margin-top:50px;
    .recommend {
        font-size:14px;
        color:#969696;
        overflow:hidden;
    }
    .recommend-writer {
        margin:10px;
        float:left;
    }
    .change-writer {
        float:right;
        margin:10px;
    }
    .writer-img {
        display:inline-block;
        width:50px;
        height:50px;
        border-radius:25px;
    }
`;

export const WriterItem = styled.div`
    height:80px;
    margin:0 auto;
    overflow:hidden;
`;

export const WriterPic = styled.div`
    float:left
`;
export const WriterInfoWrapper= styled.div`
    float:right;
    height:50px;
    width:224px;
`;

export const WriterTitle = styled.span`
    font-size:14px;
    margin-right:6px;
    margin-top:6px;
    float:left;
`;
export const WriterAttention = styled.span`
    font-size:13px;
    margin-right:6px;
    margin-top:6px;
    color:#42c02e;
    float:right;
`;

export const WriterInfo = styled.div`
    font-size:12px;
    color:#969696;
    margin-top:35px;
    clear:both;
`;