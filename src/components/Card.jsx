import React, { Component } from 'react';
import image from '../letter-j.png';
import bootstrap from '../bootstrap.css';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
      badges: [],
      url: '',
    };
  }
  render() {
    return (
      <div class="card">
        <img
          src={image}
          class="card-img-top"
          alt=""
          width="200"
          height="200"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Project title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tech stack tags go here</h6>
          <p class="card-text">
            <h1>{this.state.description}</h1>
          </p>
          <button
            type="button"
            class="btn btn-outline-primary"
            href={this.state.url}
          >
            Visit Github Repo
          </button>
        </div>
      </div>
    );
  }
}
export default Card;
