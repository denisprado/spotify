import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';
import store from './store';

import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wrapper, Container } from './styles/components'

import Routes from './routes';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
    <ToastContainer autoClose={3000} />
    <Provider store={store}>
      <Routes />
    </Provider>
  </Fragment>
);

export default App;
