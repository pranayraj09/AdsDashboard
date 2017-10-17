import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './containers/Home'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
