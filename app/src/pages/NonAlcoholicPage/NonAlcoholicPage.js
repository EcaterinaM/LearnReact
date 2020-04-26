import React from 'react';

import BaseDrink from '../../components/BaseDrink/BaseDrink';
import PagePath from '../../constants/PagePath';

class NonAlcoholicPage extends React.Component{
  render() {
    return (<BaseDrink path={PagePath.NonAlcoholic} />);
  }
}

export default NonAlcoholicPage;

