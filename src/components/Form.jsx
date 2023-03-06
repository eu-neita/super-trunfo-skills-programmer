import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // state = { };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            type="text"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>

        <label data-testid="rare-label" htmlFor="rare-input">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input" data-testid="trunfo-label">
          Super Trybe Trunfo
          {!hasTrunfo
          && <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
          />}
          {hasTrunfo && <span>Você já tem um Super Trunfo em seu baralho</span>}
        </label>

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
