import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    const { hasTrunfo } = this.props;
    const { isSaveButtonDisabled } = this.props;
    const { onInputChange } = this.props;
    const { onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descrition">
          Descrição:
          <textarea
            id="descrition"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number">
          Idade:
          <input
            id="number"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number2">
          Força:
          <input
            id="number2"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number3">
          Poder:
          <input
            id="number3"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imagem">
          Imagem:
          <input
            id="imagem"
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="type">
          Raridade:
          <select
            id="type"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <div>
          {hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          )
            : (
              <label htmlFor="trunfo">
                Super Trunfo
                <input
                  id="trunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            ) }
        </div>
        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
