import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="col-sm-3">
            <div className="flip">
              <div className="card">
                <div className="face front">
                  <div className="inner">
                    <img src={ this.props.src } />
                  </div>
                </div>
                <div className="face back">
                  <div className="inner text-center">
                    <h3>{this.props.title}</h3>
                    <button type="button" className="btn btn-default">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Card;
