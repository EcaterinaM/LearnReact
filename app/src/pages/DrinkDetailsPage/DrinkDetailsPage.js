import React from 'react';
import axios from 'axios';

import './DrinkDetailsPage.scss';

class DrinkDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cocktail: {}
    };
  }

  handleOnBackClick = () => {
    this.props.history.goBack();
  }

  componentDidMount() {
    let id = this.props.match.params['id'];
    const DETAILS_REQUEST = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    axios.get(DETAILS_REQUEST)
      .then((response) => {
        this.setState({ cocktail: response.data.drinks[0] });
      });
  }

  render() {


    return (
      <div className="details-page-container" >
        <button className="primary-button back-button"
          onClick={this.handleOnBackClick}>Back</button>
        <div className="details-content">
          <div className="details-title">{this.state.cocktail.strDrink}</div>
          <div className="details-image">
            <img src={this.state.cocktail.strDrinkThumb} alt={this.state.cocktail.strDrink} />
          </div>
        </div>
      </div>
    );
  }
}


export default DrinkDetailsPage;

