import React from 'react';
import { UISref } from '@uirouter/react';
import medium from '../assets/medium.svg';
import twitter from '../assets/twitter.svg';
import amazon from '../assets/amazon.svg';
import github from '../assets/github.svg';

export function Navigation(props) {
    return (
      <header className="header">
        <div className="titleBlock">
          <UISref to="home">
            <a className="title" href="/">
              Maude Lemaire
            </a>
          </UISref>
        </div>
        <div className="navigation">
          <div className="menu">
            <UISref to="about">
              <a className="nav-item" href="/about">
                about
              </a>
            </UISref>
            <UISref to="book">
              <a className="nav-item" href="/book">
                book
              </a>
            </UISref>
            <UISref to="speaking">
              <a className="nav-item" href="/speaking">
                speaking
              </a>
            </UISref>
            <UISref to="newsletter">
              <a className="nav-item" href="/newsletter">
                newsletter
              </a>
            </UISref>
          </div>
          <div className="social">
            <a className="social-item" href="https://medium.com/@maude.codes">
              <img src={medium} style={{ height: 20, width: 20 }} alt="Maude on Medium" />
            </a>
            <a className="social-item" href="https://twitter.com/qcmaude">
              <img src={twitter} style={{ height: 20, width: 20 }} alt="Maude on Twitter" />
            </a>
            <a className="social-item" href="https://github.com/qcmaude">
              <img src={github} style={{ height: 20, width: 20 }} alt="Maude on GitHub" />
            </a>
            <a className="social-item" href="https://www.amazon.com/Maude-Lemaire/e/B08BZ82RTT/">
              <img src={amazon} style={{ height: 20, width: 20 }} alt="Maude on Amazon" />
            </a>
          </div>
        </div>
      </header>
    );
}