import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@cpts/App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};
render(App)
// 模块热替换的 API
if (module.hot) {
  module.hot.accept(App, () => {
    render(App)
  });
}

registerServiceWorker();
