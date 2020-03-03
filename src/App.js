import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import Header from './common/header'
import Home from './pages/home'
import store from './store';


function App() {
  return (
    <Provider store = {store}>
      <Fragment>
        <GlobalStyle/>
        <IconFont/>
        <Header/>
        <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home }></Route>
        </div>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
