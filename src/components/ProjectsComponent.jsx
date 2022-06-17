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
            <Card
              description="React web application"
              title="HackerNews"
              url="https://github.com/zhang-jiayue/hackernews"
            />
          </div>
          <div class="col-sm">
            <Card
              description="React web application"
              title="Todo List"
              url="https://github.com/zhang-jiayue/Todo-App"
            />
          </div>
          <div class="col-sm">
            <Card
              description="React web application"
              title="BearMaps"
              url="https://github.com/zhang-jiayue/cs61b-sp19/tree/master/proj3"
            />
          </div>
          <div class="col-sm">
            <Card
              description="React web application"
              title="OS Resource Allocation"
              url="https://github.com/zhang-jiayue/Resource-Allocation"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsComponent;
