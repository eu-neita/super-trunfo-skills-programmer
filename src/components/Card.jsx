import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, buttonOn, buttonDelClick } = this.props;
    return (
      <div>
        <span data-testid="name-card">{ cardName }</span>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <span data-testid="description-card">{ cardDescription }</span>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <span data-testid="rare-card">{ cardRare }</span>
        { cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span> }
        {buttonOn
        && (
          <button
            data-testid="delete-button"
            onClick={ buttonDelClick }
          >
            Excluir
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  buttonOn: PropTypes.bool,
}.isRequired;

export default Card;
