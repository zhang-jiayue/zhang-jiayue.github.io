import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class Website extends Component {
  render() {
    return (
      <div>
        <body class="Site">
          <HeaderComponent />
          <Router>
            <Routes>
              <Route path="/" element={<AboutComponent />} />
              <Route path="/projects" element={<ProjectsComponent />} />
              <Route path="/posts" element={<div></div>} />
            </Routes>
          </Router>
          <main class="Site-content"></main>
          <FooterComponent />{' '}
        </body>
      </div>
    );
  }
}
export default Website;
