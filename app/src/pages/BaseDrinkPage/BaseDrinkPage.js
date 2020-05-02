import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import RequestPaths from '../../helpers/RequestPaths';

import './BaseDrinkPage.scss';

function BaseDrinkPage(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(RequestPaths.getRequestPath(props.path))
      .then(response => {
        setCocktails(response.data.drinks)
      });
  }, [props.path]);

  const cocktailCards = cocktails.map(drink => <Card item={drink} key={drink.idDrink} />);

  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <div className="search-bar">
          <Search />
        </div>
        <div className="main-content">
          <div className="cards">
            {cocktailCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseDrinkPage;

