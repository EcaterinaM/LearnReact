import React from 'react';
import axios from 'axios';

import RequestPaths from '../../helpers/RequestPaths';
import BasePageHoc from '../../hocs/BasePageHoc/BasePageHoc';

import Card from '../Card/Card';

import './BaseDrink.scss';

class BaseCocktail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    };
  }

  componentDidMount() {
    const REQUEST_PATH = RequestPaths.getRequestPath(this.props.path);

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

