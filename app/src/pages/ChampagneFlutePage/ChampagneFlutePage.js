import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';

class ChampagneFlutePage extends React.Component {
  render() {
    const CHAMPAGNEFLUTE_REQUEST_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute';
    return (<BaseCocktail requestPath={CHAMPAGNEFLUTE_REQUEST_PATH} />);
  }
}

export default ChampagneFlutePage;

