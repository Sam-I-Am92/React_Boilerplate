import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App time={Date.now()}/>, document.getElementById('app'));