import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';

const rootELement = document.getElementById('root');
ReactDOM.render(
<Router>
    <App />
</Router>, 
rootELement
);
