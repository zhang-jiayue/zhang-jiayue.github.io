import React, { Component } from 'react';
import Card from './Card';
class ProjectsComponent extends Component {
  render() {
    return (
      <div class="container mx-auto pt-5">
        <div class="row row-cols-3 row-cols-md-3 g-5">
          <div class="col-sm">
            <Card
              description="Single-page web app written with React and Bootstrap 5"
              title="Personal Website"
              url="http://jiayue.me"
            />
          </div>
          <div class="col-sm">
            <Card
              description="Currency converter written in JavaScript"
              title="Currency Converter"
              url="https://zhang-jiayue.github.io/js-currency-converter/"
            />
          </div>
          <div class="col-sm">
            <Card />
          </div>
          {/* <div class="col-sm">
            <Card />
          </div> */}
        </div>
      </div>
    );
  }
}

export default ProjectsComponent;
