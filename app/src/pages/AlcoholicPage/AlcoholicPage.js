import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';

class AlcoholicPage extends React.Component {
  render() {
    const ALCOHOLIC_REQUEST_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
    return (<BaseCocktail requestPath={ALCOHOLIC_REQUEST_PATH} />);
  }
}

export default AlcoholicPage;

