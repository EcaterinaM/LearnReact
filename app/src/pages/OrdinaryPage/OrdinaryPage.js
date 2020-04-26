import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';

class OrdinaryPage extends React.Component{
  render() {
    const ORDINARY_REQUEST_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink';
    return (<BaseCocktail requestPath={ORDINARY_REQUEST_PATH} />);
  }
}

export default OrdinaryPage;

