import React from 'react';

import Card from '../Card/Card';
import TitleHoc from '../hocs/TitleHoc';

import './DetailsPage.scss';

class DetailsPage extends React.Component{


  render(){
    const onBack= () => { this.props.onBackDetailsPage(); }
    return (
      <div className="details-page-container" >
           <button className="primary-button back-button"
                  onClick={() => onBack()}>Back</button>
                <Card  imagePath={this.props.selectedCocktail.strDrinkThumb} 
                            name={this.props.selectedCocktail.strDrink} 
                            key={this.props.selectedCocktail.strDrink}/>
      </div>);
  }
}

DetailsPage = new TitleHoc(DetailsPage);

export default DetailsPage;

