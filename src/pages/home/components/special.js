import React , { Component } from 'react';
import { 
    SpecialWrapper,
    SpecialItem
} from '../style';
class Special extends Component {

    render () {
        return (
            <SpecialWrapper>
                <SpecialItem>
                <img
                    className="item-img"
                    alt=""
                    src="https://zhaoliangji.com/image/VCG41N916358754.png"
                />
                </SpecialItem>
                <SpecialItem>
                <img
                    className="item-img"
                    alt=""
                    src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                />
                </SpecialItem>
                <SpecialItem>
                <img
                    className="item-img"
                    alt=""
                    src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                />
                </SpecialItem>
                <SpecialItem>
                <img
                    className="item-img"
                    alt=""
                    src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                />
                </SpecialItem>
            </SpecialWrapper>
        );
    }
}

export default Special;