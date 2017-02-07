import './index.scss';
import React from 'react';
import {render} from "react-dom";
// import Hello from './components/hello/index.jsx';
import Menu from './components/menu/index.jsx';

render(
     <Menu></Menu>,
     document.querySelector('#container')
);