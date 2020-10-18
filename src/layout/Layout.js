import React from 'react';
import '../App.css';
import { Navigation } from './Navigation.js';

export const Layout = ({children}) => {
    return <div className="app">
      <Navigation/>
      <div className="main-content">
        {children}
      </div>
    </div>
};