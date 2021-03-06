import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import '../public/favicon.ico';
import '/src/refer/css/css.css'
import PublicHeader from "./component/header/header.nav";

function Root() {
    return <>
        <PublicHeader />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
}

ReactDOM.render( Root(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
