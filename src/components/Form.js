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
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descrition">
          Descrição:
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number">
          Idade:
          <input
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number">
          Força:
          <input
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="number">
          Poder:
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="type">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="name">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onChange={ onSaveButtonClick }
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
