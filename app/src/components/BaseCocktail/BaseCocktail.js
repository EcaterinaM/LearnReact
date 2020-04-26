import React from 'react';
import axios from 'axios';

import Card from '../Card/Card';

import BasePageHoc from '../../hocs/BasePageHoc/BasePageHoc';

import './BaseCocktail.scss';

class BaseCocktail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };
  }

  componentDidMount() {
    const REQUEST_PATH = this.props.requestPath;
    axios.get(REQUEST_PATH)
      .then((response) => {
        this.setState({ cocktails: response.data.drinks });
      });
  }

  render() {
    let cocktails = this.state.cocktails.map(drink => <Card item={drink} key={drink.idDrink}/>);

    return (
      <div className="cards">
        {cocktails}
      </div>);
  }
}

BaseCocktail = BasePageHoc(BaseCocktail);

export default BaseCocktail;

