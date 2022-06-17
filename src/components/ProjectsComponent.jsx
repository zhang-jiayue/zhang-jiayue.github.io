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
              description="Web application Using Axios to fetch trending stories from third party API with React as the front-end"
              title="HackerNews"
              url="https://master.dryn0v1rcl6yk.amplifyapp.com/"
            />
          </div>
          <div class="col-sm">
            <Card
              description="full-stack web app with Spring Boot as back-end and React as front-end"
              title="Todo List"
              url="https://github.com/zhang-jiayue/Todo-App"
            />
          </div>
          <div class="col-sm">
            <Card
              description="Developed algorithms for a web application’s back-end which is similar to Google Maps"
              title="BearMaps"
              url="https://github.com/zhang-jiayue/cs61b-sp19/tree/master/proj3"
            />
          </div>
          <div class="col-sm">
            <Card
              description="Simulated resource allocation with First Come First Serve and Banker’s algorithms"
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
