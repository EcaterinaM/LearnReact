import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';

class NonAlcoholicPage extends React.Component{
  render() {
    const NONALCOHOLIC_REQUEST_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
    return (<BaseCocktail requestPath={NONALCOHOLIC_REQUEST_PATH} />);
  }
}

export default NonAlcoholicPage;

