import React, { Component } from 'react';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // state = { };

  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea type="text" data-testid="description-input" />
        </label>

        <label htmlFor="attr1-input">
          Attr01
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Attr02
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          Attr03
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>

        <label data-testid="rare-label" htmlFor="rare-input">
          Raridade
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input" data-testid="trunfo-label">
          Super Trybe Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
