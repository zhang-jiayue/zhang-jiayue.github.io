import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class Website extends Component {
  render() {
    return (
      <div className="Site">
        <HeaderComponent />
        <Router>
          <Routes>
            <Route path="/" element={<AboutComponent />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/posts" element={<div></div>} />
          </Routes>
        </Router>
        <main className="Site-content"></main>
        <FooterComponent />{' '}
      </div>
    );
  }
}
export default Website;
