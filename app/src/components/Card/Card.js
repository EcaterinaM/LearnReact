import React from 'react';
import { withRouter } from 'react-router-dom';

import './Card.scss';

function Card(props){

  const onTitleClick = () => {
    props.history.push(`/details/${props.item.idDrink}`)
  }

  return (
    <div className="card" >
      <div className="card-image">
        <img src={props.item.strDrinkThumb} alt={props.item.strDrink} />
      </div>
      <div className="card-title"
        onClick={onTitleClick}>
        {props.item.strDrink}
      </div>
    </div>);
}

export default withRouter(Card);

