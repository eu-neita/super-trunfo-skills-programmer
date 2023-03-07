import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      filterInput, filterInputRare, cardTrunfoFilter, filterDisable } = this.props;
    return (
      <form>
        <section id="create-card-form">
          <h1>Criar Carta</h1>
          <div>
            <label htmlFor="name-input">
              Nome
            </label>
            <input
              type="text"
              data-testid="name-input"
              id="name-input"
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
            />
          </div>

          <div>
            <label htmlFor="description-input">
              Descrição
            </label>
            <textarea
              type="text"
              data-testid="description-input"
              id="description-input"
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
            />
          </div>

          <div id="attr-div">
            <div>
              <label htmlFor="cardAttr1">Attr01</label>
              <input
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                name="cardAttr1"
                id="cardAttr1"
                onChange={ onInputChange }
              />
            </div>

            <div>
              <label className="label-attr" htmlFor="cardAttr2">Attr02</label>
              <input
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                name="cardAttr2"
                id="cardAttr2"
                onChange={ onInputChange }
              />
            </div>

            <div>
              <label className="label-attr" htmlFor="cardAttr3">Attr03</label>
              <input
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                name="cardAttr3"
                id="cardAttr3"
                onChange={ onInputChange }
              />
            </div>
          </div>

          <div>
            <label htmlFor="image-input">
              Imagem
            </label>
            <input
              type="text"
              data-testid="image-input"
              id="image-input"
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
            />
          </div>

          <div>
            <label data-testid="rare-label" htmlFor="rare-input">
              Raridade
            </label>
            <select
              name="cardRare"
              data-testid="rare-input"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>

          <div id="trunfo-div">
            {!hasTrunfo
          && (
            <div>
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="trunfo-input"
                checked={ cardTrunfo }
                name="cardTrunfo"
                onChange={ onInputChange }
              />
              <label htmlFor="trunfo-input" data-testid="trunfo-label">
                Super Trunfo
              </label>
            </div>
          )}
            {hasTrunfo && <span>Você já tem um Super Trunfo em seu baralho</span>}
          </div>

          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>

        <section id="filter-form">
          <h1>Pesquisa</h1>
          <div className="filters-divs">
            <label htmlFor="filterInput">
              Buscar Cartas
            </label>
            <input
              type="text"
              data-testid="name-filter"
              id="filterInput"
              value={ filterInput }
              name="filterInput"
              onChange={ onInputChange }
              disabled={ filterDisable }
            />
          </div>

          <div className="filters-divs">
            <label
              data-testid="rare-label-filter"
              htmlFor="rare-filter"
            >
              Raridade
            </label>
            <select
              name="filterInputRare"
              data-testid="rare-filter"
              id="rare-filter"
              value={ filterInputRare }
              onChange={ onInputChange }
              disabled={ filterDisable }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>

          <div id="filters-trunfo-div">
            <label htmlFor="cardTrunfoFilter">Filtrar Trunfo</label>
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              id="cardTrunfoFilter"
              checked={ cardTrunfoFilter }
              name="cardTrunfoFilter"
              onChange={ onInputChange }
            />
          </div>
        </section>

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
  filterInput: PropTypes.string,
  filterInputRare: PropTypes.string,
  cardTrunfoFilter: PropTypes.bool,
  filterDisable: PropTypes.bool,
}.isRequired;

export default Form;
