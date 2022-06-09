import React, { Component } from 'react';
import image from '../letter-j.png';
import bootstrap from 'bootstrap';
class Card extends Component {
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Project description.
          </p>
          <button type="button" class="btn btn-outline-primary">
            Visit
          </button>
        </div>
      </div>
    );
  }
}
export default Card;
