import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleReactLightBox from 'simple-react-lightbox';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightBox>
    <App />
    </SimpleReactLightBox>
  </React.StrictMode>,
  document.getElementById('root')
);

