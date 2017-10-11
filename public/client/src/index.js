import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

// Importing Redux here
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
