import React , { Component } from 'react';

import {
    ListWrapper,
    ItemWrapper,
    ItemContent,
    ItemTitle,
    ItemDesc,
    ItemInfo,
    ItemDetail
} from '../style';

 class List extends Component {
     
    render() {
        return (
            <ListWrapper>
                <ItemWrapper >
                    <ItemContent>
                    <ItemTitle>推荐9个堪称神器的学习网站</ItemTitle>
                        <ItemDesc >
                            每天都会收到很多读者的私信，问我：“二哥，有什么推荐的学习网站吗？最近很浮躁，手头的一些网站都看烦了，想看看二哥这里有什么新鲜货。” 今天一早做...
                        </ItemDesc>
                        <ItemInfo>
                            <ItemDetail>
                                <span className="iconfont diamond">&#xe6c3;</span>
                                <span className="diamond number">9.8</span>
                            </ItemDetail>
                            <ItemDetail>
                                麦田大豆
                            </ItemDetail>
                            <ItemDetail>
                                <span className="iconfont">&#xe62a;</span>
                                <span className="number">11</span>
                            </ItemDetail>
                            <ItemDetail>
                                <span className="iconfont">&#xe64f;</span>
                                <span className="number">98</span>
                            </ItemDetail>

                        </ItemInfo>
                    </ItemContent>
                
                    <img 
                                className="item-pic"
                                src="https://zhaoliangji.com/image/IMG_9519.png"
                            />
                </ItemWrapper>
                <ItemWrapper >
                    <ItemContent>
                    <ItemTitle>推荐9个堪称神器的学习网站</ItemTitle>
                        <ItemDesc >
                            每天都会收到很多读者的私信，问我：“二哥，有什么推荐的学习网站吗？最近很浮躁，手头的一些网站都看烦了，想看看二哥这里有什么新鲜货。” 今天一早做...
                        </ItemDesc>
                        <ItemInfo>
                            <ItemDetail>
                                <span className="iconfont diamond">&#xe6c3;</span>
                                <span className="diamond number">9.8</span>
                            </ItemDetail>
                            <ItemDetail>
                               <span> 麦田大豆</span>
                               <span></span>
                            </ItemDetail>
                            <ItemDetail>
                                <span className="iconfont">&#xe62a;</span>
                                <span className="number">11</span>
                            </ItemDetail>
                            <ItemDetail>
                                <span className="iconfont">&#xe64f;</span>
                                <span className="number">98</span>
                            </ItemDetail>

                        </ItemInfo>
                    </ItemContent>
                
                    <img 
                                className="item-pic"
                                src="https://zhaoliangji.com/image/IMG_9519.png"
                            />
                </ItemWrapper>

            </ListWrapper>
        );
    }
 }

 export default List