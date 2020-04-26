import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';
import PagePath from '../../constants/PagePath';

class NonAlcoholicPage extends React.Component{
  render() {
    return (<BaseCocktail path={PagePath.NonAlcoholic} />);
  }
}

export default NonAlcoholicPage;

