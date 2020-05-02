import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';

import './DrinkDetailsPage.scss';

function DrinkDetailsPage(props) {

  const [cocktail, setCocktail] = useState([]);
  const [requestUrl, setRequestUrl] = useState('');

  useEffect(() => {
    setRequestUrl(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params['id']}`);
    axios.get(requestUrl)
      .then((response) => {
        setCocktail(response.data.drinks[0])
      });
      
  }, [requestUrl]);


  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <div className="details-content">
          <div className="details-title">{cocktail.strDrink}</div>
          <div className="details-image">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
        </div>
        <div className="details-footer">
          <button className="primary-button back-button"
            onClick={() => { props.history.goBack(); }}>
            Back
            </button>
        </div>
      </div>
    </div>);
}


export default DrinkDetailsPage;

