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
    const listItems = this.props.tags.map((tag) => (
      <span className="badge bg-secondary">{tag}</span>
    ));
    return (
      <div className="card h-100">
        {this.props.image === null ? (
          <img
            src={image}
            className="card-img-top"
            alt=""
            width="200"
            height="260"
          ></img>
        ) : (
          <img
            src={this.props.img}
            className="card-img-top"
            alt=""
            width="200"
            height="260"
          ></img>
        )}
        <div className="card-body">
          <h5 className="card-title ">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span>{listItems}</span>
          </h6>
          <div className="card-text">
            <p>{this.props.description}</p>
          </div>
          <a
            type="button"
            className="btn btn-outline-primary"
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
