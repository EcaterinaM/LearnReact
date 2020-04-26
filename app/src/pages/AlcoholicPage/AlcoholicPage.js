import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';
import PagePath from '../../constants/PagePath';

class AlcoholicPage extends React.Component {
  render() {
    return (<BaseCocktail path={PagePath.Alcoholic} />);
  }
}

export default AlcoholicPage;

