// 调用react
import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//import Counter from './Counter';
//import AIS from './AIS';
import Tt from './test';

  

ReactDOM.render(<Tt  />,document.getElementById('root'));
registerServiceWorker();