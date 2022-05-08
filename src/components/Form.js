import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="descrition">
          Descrição:
          <textarea data-testid="description-input" />
        </label>

        <label htmlFor="number">
          Idade:
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="number">
          Força:
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="number">
          Poder:
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="imagem">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>

        <label htmlFor="type">
          Raridade:
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="name">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <div>
          <button type="button" data-testid="save-button"> Salvar </button>
        </div>
      </form>
    );
  }
}

export default Form;
