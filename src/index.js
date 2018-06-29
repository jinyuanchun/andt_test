// 调用react
import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

//import Counter from './Counter';
import AIS from './AIS'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
  

ReactDOM.render(<AIS  />,document.getElementById('root'));
registerServiceWorker();