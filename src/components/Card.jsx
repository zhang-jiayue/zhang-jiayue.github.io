import React, { Component } from 'react';
import image from '../letter-j.png';
import bootstrap from '../bootstrap.css';
import card from './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      description: '',
      title: '',
      badges: [],
      url: '',
    };
  }
  render() {
    return (
      <div class="card h-100">
        {this.props.image === null ? (
          <img
            src={image}
            class="card-img-top"
            alt=""
            width="200"
            height="260"
          ></img>
        ) : (
          <img
            src={this.props.img}
            class="card-img-top"
            alt=""
            width="200"
            height="260"
          ></img>
        )}
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <span class="badge bg-dark">React</span>
            Tech stack tags go here
          </h6>
          <p class="card-text">
            <p>{this.props.description}</p>
          </p>
          <a
            type="button"
            class="btn btn-outline-primary"
            href={this.props.url}
          >
            Live Demo
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
