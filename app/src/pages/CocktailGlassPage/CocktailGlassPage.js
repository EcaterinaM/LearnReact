import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';
import PagePath from '../../constants/PagePath';

class CocktailGlassPage extends React.Component{
  render() {
    return (<BaseCocktail path={PagePath.CocktailGlass} />);
  }
}

export default CocktailGlassPage;

