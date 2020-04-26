import React from 'react';

import BaseDrink from '../../components/BaseDrink/BaseDrink';
import PagePath from '../../constants/PagePath';

class OrdinaryPage extends React.Component{
  render() {
    return (<BaseDrink path={PagePath.Ordinary} />);
  }
}

export default OrdinaryPage;

