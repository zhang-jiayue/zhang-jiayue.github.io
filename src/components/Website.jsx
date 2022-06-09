import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
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
              <Route path="/projects" element={<AboutComponent />} />
              <Route path="/blog" element={<div></div>} />
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
