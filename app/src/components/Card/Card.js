import React from 'react';
import { Redirect } from 'react-router-dom';

import './Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDetailsPage: false,
    }
  }

  handleTitleClick = () => {
    this.setState(() => ({
      toDetailsPage: true
    }))
  }

  render() {

    if (this.state.toDetailsPage === true) {
      const path = `/details/${this.props.item.idDrink}`;
      return <Redirect to={path} />
    }

    return (
      <div className="card" >
        <div className="card-image">
          <img src={this.props.item.strDrinkThumb} alt={this.props.item.strDrink} />
        </div>
        <div className="card-title"
          onClick={this.handleTitleClick}>
          {this.props.item.strDrink}
        </div>
      </div>);
  }
}

export default Card;

