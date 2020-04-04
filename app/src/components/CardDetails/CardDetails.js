import React from 'react';

import './CardDetails.css';

class CardDetails extends React.Component{

  constructor(props){
        super(props);
  }

  render(){
    const onHide = () => { this.props.onHideDetailsClick(); }

    return (
      <div className="details-container" >
          <div className="left-container">
              <button className="primary-button"
                      onClick={()=> onHide()}>
                  Hide details
               </button>
              <div className="details-image-container">
              <img  className="details-img"
                    src={this.props.selectedCocktail.strDrinkThumb} 
                    alt={this.props.selectedCocktail.strDrink}/>
              </div>
          </div>
          <div className="right-container">
                <span> Cocktail Name: {this.props.selectedCocktail.strDrink}</span>
                <span>Id: {this.props.selectedCocktail.idDrink}</span>
          </div>
      </div>
  );
  }
}

export default CardDetails;

