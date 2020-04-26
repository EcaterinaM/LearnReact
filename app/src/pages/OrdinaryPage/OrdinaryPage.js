import React from 'react';

import BaseCocktail from '../../components/BaseCocktail/BaseCocktail';
import PagePath from '../../constants/PagePath';

class OrdinaryPage extends React.Component{
  render() {
    return (<BaseCocktail path={PagePath.Ordinary} />);
  }
}

export default OrdinaryPage;

