import React from 'react';

import BaseDrink from '../../components/BaseDrink/BaseDrink';
import PagePath from '../../constants/PagePath';

class AlcoholicPage extends React.Component {
  render() {
    return (<BaseDrink path={PagePath.Alcoholic} />);
  }
}

export default AlcoholicPage;

