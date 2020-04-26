import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';

class CocktailGlassPage extends React.Component{
  render() {
    const COCKTAILGLASS_REQUEST_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';
    return (<BaseCocktail requestPath={COCKTAILGLASS_REQUEST_PATH} />);
  }
}

export default CocktailGlassPage;

