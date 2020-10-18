import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import Home from './Home';
import About from './About';
import Book from './Book';
import Speaking from './Speaking';
import Newsletter from './Newsletter';
import * as serviceWorker from './serviceWorker';

const states = [
  {
    name: 'home',
    url: '/',
    component: Home,
  },
  {
    name: 'about',
    url: '/about',
    component: About,
  },
  {
    name: 'book',
    url: '/book',
    component: Book,
  },
  {
    name: 'speaking',
    url: '/speaking',
    component: Speaking,
  },
  {
    name: 'newsletter',
    url: '/newsletter',
    component: Newsletter,
  },
];

const plugins = [pushStateLocationPlugin];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView />
  </UIRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
