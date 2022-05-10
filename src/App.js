import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

const stateHasTrue = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: true,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verify = this.verify.bind(this);
  }

  onInputChange({ target }) {
    // e.preventDefault();
    // const { target } = e;
    const { name } = target;
    // const { value } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.validandoButton(this.state); });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    const salveCard = [{
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled,
    }];

    this.setState((prevState) => ({
      newCard: [...prevState.newCard, ...salveCard],
    }));

    this.setState(stateInicial, () => { this.verify(); });
  }

  verify() {
    const { newCard } = this.state;
    if (newCard.some((e) => e.hasTrunfo === true)) {
      return this.setState(stateHasTrue);
    }
    // { <p>Você já tem um Super Trunfo em seu baralho</p>; }
  }

  validandoButton(state) {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    // } = this.state;

    const maxTotal = 210;
    const max = 90;

    if (state.cardName && state.cardDescription
      && state.cardImage && state.cardRare
      && Number(state.cardAttr1)
      + Number(state.cardAttr2) + Number(state.cardAttr3) <= maxTotal
      && Number(state.cardAttr1) <= max && Number(state.cardAttr1) >= 0
      && Number(state.cardAttr2) <= max && Number(state.cardAttr2) >= 0
      && Number(state.cardAttr3) <= max && Number(state.cardAttr3) >= 0
    ) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const { cardName } = this.state;
    const { cardDescription } = this.state;
    const { cardAttr1 } = this.state;
    const { cardAttr2 } = this.state;
    const { cardAttr3 } = this.state;
    const { cardImage } = this.state;
    const { cardRare } = this.state;
    const { cardTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;
    const { hasTrunfo } = this.state;

    return (
      <div>
        <h1> FORMULÁRIO </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
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
        />
      </div>
    );
  }
}

export default App;
