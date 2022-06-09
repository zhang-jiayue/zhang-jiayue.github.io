import React, { Component } from 'react';
import Resume from '../Jiayue_s_Resume.pdf';

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand mb-0 h1" href="#">
              JIAYUE ZHANG
            </a>
            <ul class="navbar-nav justify-content-end">
              <li class="navbar">
                <a class="nav-link" href="/">
                  ABOUT
                </a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="/projects">
                  PROJECTS
                </a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href="/blogs">
                  BLOG
                </a>
              </li>
              <li class="nav-link">
                <a class="nav-link" href={Resume}>
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
