import React from 'react';

import BaseDrink from '../../components/BaseDrink/BaseDrink';
import PagePath from '../../constants/PagePath';

class CocktailGlassPage extends React.Component{
  render() {
    return (<BaseDrink path={PagePath.CocktailGlass} />);
  }
}

export default CocktailGlassPage;

