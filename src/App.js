import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import Header from './common/header'
import store from './store';


function App() {
  return (
    <Provider store = {store}>
      <Fragment>
        <GlobalStyle/>
        <IconFont/>
        <Header/>
      </Fragment>
    </Provider>
  );
}

export default App;
