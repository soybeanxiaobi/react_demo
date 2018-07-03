import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Button from './demo/button';




ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Button/>, document.getElementById('demoCont'));

registerServiceWorker();
