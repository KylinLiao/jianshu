import React ,{ Component } from 'react';
import List from './components/list';
import Special from './components/special';
import Writer from './components/writer';
import { 
    HomeWrapper, HomeLeft, HomeRight
} from './style';

class Home extends Component {

    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                    className="banner"
                    src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png" />
                    
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Special />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;