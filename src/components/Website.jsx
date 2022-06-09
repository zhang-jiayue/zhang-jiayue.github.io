import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import PageComponent from './PageComponent';
class Website extends Component {
  render() {
    return (
      <div>
        <body class="Site">
          <HeaderComponent />
          <PageComponent />
          <main class="Site-content"></main>
          <FooterComponent />{' '}
        </body>
      </div>
    );
  }
}
export default Website;
