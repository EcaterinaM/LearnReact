import React from 'react';
import { withRouter } from 'react-router-dom';

import './Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
    //Why do I need this?
    this.onTitleClick = this.onTitleClick.bind(this)
  }

  onTitleClick = () => {
    this.props.history.push(`/details/${this.props.item.idDrink}`)
  }

  render() {
    return (
      <div className="card" >
        <div className="card-image">
          <img src={this.props.item.strDrinkThumb} alt={this.props.item.strDrink} />
        </div>
        <div className="card-title"
          onClick={this.onTitleClick}>
          {this.props.item.strDrink}
        </div>
      </div>);
  }
}

export default withRouter(Card);

