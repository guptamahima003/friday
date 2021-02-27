import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectCar from './components/pages/Index';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <SelectCar />
  </BrowserRouter>
), document.getElementById('root'));

