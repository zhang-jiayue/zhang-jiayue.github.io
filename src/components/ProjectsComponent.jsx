import React, { Component } from 'react';
import Card from './Card';
import website from '../website.jpg';
import news from '../news.jpg';
import converter from '../converter.png';
import todo from '../todo.jpg';
import banker from '../banker.png';
class ProjectsComponent extends Component {
  render() {
    return (
      <div className="container mx-auto pt-5">
        <div className="row row-cols-3 row-cols-md-3 g-5">
          <div className="col-sm">
            <Card
              tags={['React', 'Bootstrap', 'Javascript', 'AWS']}
              img={website}
              description="Single-page web app written with React and Bootstrap 5"
              title="Personal Website"
              url="http://jiayue.me"
            />
          </div>
          <div className="col-sm">
            <Card
              tags={['Javascript', 'HTML', 'CSS', 'jQuery']}
              img={converter}
              description="Currency converter written in JavaScript"
              title="Currency Converter"
              url="https://zhang-jiayue.github.io/js-currency-converter/"
            />
          </div>
          <div className="col-sm">
            <Card
              tags={['React', 'Bootstrap', 'Javascript', 'AWS']}
              img={news}
              description="Web application Using Axios to fetch trending stories from third party API with React as the front-end"
              title="HackerNews"
              url="https://master.dryn0v1rcl6yk.amplifyapp.com/"
            />
          </div>
          <div className="col-sm">
            <Card
              tags={['Java', 'Spring Boot', 'React', 'Bootstrap', 'Javascript']}
              img={todo}
              description="full-stack web app with Spring Boot as back-end and React as front-end. Please use username jiayue and password dummy"
              title="Todo List"
              url="https://main.d3pr1j4jua1mot.amplifyapp.com"
            />
          </div>
          <div className="col-sm">
            <Card
              img={null}
              tags={['Java', 'JUnit', 'Spark']}
              description="Developed algorithms for a web application’s back-end which is similar to Google Maps"
              title="BearMaps"
              url="https://github.com/zhang-jiayue/cs61b-sp19/tree/master/proj3"
            />
          </div>
          <div className="col-sm">
            <Card
              img={banker}
              tags={['C', 'gdb', 'Linux commands']}
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
