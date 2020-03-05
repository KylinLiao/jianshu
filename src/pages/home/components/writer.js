import React , { Component } from 'react';

import {
    WriterWrapper,
    WriterItem,
    WriterInfoWrapper,
    WriterTitle,
    WriterAttention,
    WriterInfo,
    WriterPic
} from '../style';

class Writer extends Component {

    render () {
        return (
            <WriterWrapper>
                <div className="recommend">
                    <span className="recommend-writer">推荐作者</span>
                    <span className="change-writer">换一批</span>
                </div>
                <WriterItem>
                    <WriterPic>
                        <img
                            className="writer-img"
                            alt=""
                            src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg"/>
                    </WriterPic>
                   
                    <WriterInfoWrapper>
                        <WriterTitle>
                            董克平日记
                        </WriterTitle>
                        <WriterAttention>
                            +关注
                        </WriterAttention>
                        <WriterInfo>
                            写了870.5k字 · 3k喜欢
                        </WriterInfo>
                    </WriterInfoWrapper>
                </WriterItem>
            </WriterWrapper>
        );
    }
}

export default Writer;