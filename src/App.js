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
      filt: '',
      listFilter: [],
      trunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verify = this.verify.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.validandoButton(this.state); });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const {
      cardName, cardDescription,
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

  inputFilter = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { filt, newCard } = this.state;

      const listFilter = newCard.filter((card) => card.cardName.includes(filt));

      this.setState({
        listFilter,
      });
    });
  }

  verify() {
    const { newCard } = this.state;
    if (newCard.some((e) => e.hasTrunfo === true)) {
      return this.setState(stateHasTrue);
    }
  }

  validandoButton(state) {
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

  removeCard(cardSelect) {
    const { newCard } = this.state;
    const novaList = newCard.filter((card) => card.cardName !== cardSelect);
    if (novaList.some(({ cardTrunfo }) => cardTrunfo === true)) {
      this.setState({
        newCard: novaList,
      });
    } else {
      this.setState({
        newCard: novaList,
        hasTrunfo: false,
      });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, newCard, filt, listFilter, trunfo } = this.state;

    let coringa = [];
    if (trunfo === true) {
      coringa = newCard.filter((carta) => carta.cardTrunfo === true);
    } else if (filt.length === 0) {
      coringa = newCard;
    } else if (filt.length > 0) {
      coringa = listFilter;
    }

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
          removeCard={ this.removeCard }
        />

        <label htmlFor="filtrar">
          <input
            id="filtrar"
            name="filt"
            type="text"
            data-testid="name-filter"
            onChange={ this.inputFilter }
          />
        </label>

        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="trunfo"
            name="trunfo"
            onChange={ this.onInputChange }
          />
        </label>

        <div>
          { coringa.map((e) => (
            <div key={ e.cardName }>
              <Card
                key={ e.cardName }
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                cardImage={ e.cardImage }
              />
              <button
                name="removeCard"
                type="button"
                onClick={ () => this.removeCard(e.cardName) }
                data-testid="delete-button"
              >
                Excluir
              </button>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
