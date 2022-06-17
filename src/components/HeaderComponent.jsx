import React, { Component } from 'react';
import Resume from '../Jiayue_s_Resume.pdf';

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand mb-0 h1" href="#">
              JIAYUE ZHANG
            </a>
            <ul className="navbar-nav justify-content-end">
              <li className="navbar">
                <a className="nav-link" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-link">
                <a className="nav-link" href="/projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-link">
                <a className="nav-link" href="/posts">
                  POSTS
                </a>
              </li>
              <li className="nav-link">
                <a className="nav-link" href={Resume}>
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
