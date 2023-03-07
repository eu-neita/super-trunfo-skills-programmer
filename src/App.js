import React from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    hasTrunfo: false,
    filterInput: '',
    filterInputRare: 'todas',
    cardTrunfoFilter: false,
    filterDisable: false,
  };

  veryfyInputs = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const inputsCointain = cardName !== '' && cardDescription !== ''
    && cardImage !== '' && cardRare !== '';
    const MAXSUM_ATR = 210;
    const MAX_ATR = 90;
    const MIN_ATR = 0;
    const maxValuesAtr = [Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)]
     <= MAXSUM_ATR;
    const minValuesAtr1 = Number(cardAttr1) >= MIN_ATR && Number(cardAttr1) <= MAX_ATR;
    const minValuesAtr2 = Number(cardAttr2) >= MIN_ATR && Number(cardAttr2) <= MAX_ATR;
    const minValuesAtr3 = Number(cardAttr3) >= MIN_ATR && Number(cardAttr3) <= MAX_ATR;
    const valueBol = true;
    if (inputsCointain && maxValuesAtr && minValuesAtr1
      && minValuesAtr2 && minValuesAtr3) {
      return !valueBol;
    }
    return valueBol;
  };

  handleInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const input = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: input,
    }, () => {this.veryfyFilterDisable() 
    this.setState({ isSaveButtonDisabled: this.veryfyInputs() })});
  };

  veryfyTrunfo = () => {
    const { cards } = this.state;
    const findTunf = cards.some((has) => has.superTrunfo === true);
    if (findTunf) {
      this.setState({ hasTrunfo: true });
    }
  };

  buttonDelClick = (cIndex) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((_card, index) => index !== cIndex),
    }));
    this.setState((prevState) => ({
      hasTrunfo: prevState.cards.some((card) => card.superTrunfo === true),
    }));
  };

  savedCards = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr2, cardAttr3, cardAttr1, cardTrunfo } = this.state;
    const cardsObj = {
      name: cardName,
      description: cardDescription,
      image: cardImage,
      rare: cardRare,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      superTrunfo: cardTrunfo,
    };
    this.setState((prevState) => ({
      cards: [...prevState.cards, cardsObj],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
    }), this.veryfyTrunfo);
  };

  veryfyFilterDisable = () => {
    const { cardTrunfoFilter } = this.state;
    if (cardTrunfoFilter === true) {
      this.setState({ filterDisable: true });
    } else {
      this.setState({ filterDisable: false });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, cards,
      hasTrunfo, filterInput, filterInputRare, cardTrunfoFilter,
      filterDisable } = this.state;
    const cardsRender = cards.filter((card) => (cardTrunfoFilter === false ? card : card
      .superTrunfo === cardTrunfoFilter))
      .filter((card) => (filterInputRare === 'todas' ? card : card
        .rare === filterInputRare)).filter((card) => card
        .name.includes(filterInput)).map((card, i) => (
        (<Card
          key={ card.name }
          cardName={ card.name }
          cardDescription={ card.description }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.image }
          cardRare={ card.rare }
          cardTrunfo={ card.superTrunfo }
          buttonOn
          buttonDelClick={ () => this.buttonDelClick(i) }
        />)
      ));
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.savedCards }
          hasTrunfo={ hasTrunfo }
          filterDisable={ filterDisable }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleInputChange }
          buttonOn={ false }
        />
        {cardsRender}
      </div>
    );
  }
}

App.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default App;
