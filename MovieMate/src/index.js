import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './Components/Root'
import './index.css'

const root = document.getElementById('root');
ReactDOM.render(<Root />, root);

registerServiceWorker();
