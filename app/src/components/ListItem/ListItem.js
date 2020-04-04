import React from 'react';

import Card from '../Card/Card';

import './ListItem.css';

class ListItem extends React.Component{

  constructor(props){
        super(props);
    }

  onImageClickCallback = (selectedDrinkName) => {
    console.log('Image');
    let index = this.props.items.findIndex(i => i.strDrink == selectedDrinkName);
    this.props.onImageClick({type: this.props.title, index: index});
  }

  titleClickCallback = (selectedDrinkName) => {
    let index = this.props.items.findIndex(i => i.strDrink == selectedDrinkName);
    this.props.onTitleClick({type: this.props.title, index: index});
  }

  render(){
    
    let items = this.props.items.map(i =>
      
       <Card imagePath={i.strDrinkThumb} name={i.strDrink} key={i.strDrink}
             onImageClickCallback = {this.onImageClickCallback} 
             onTitleClickCallback = {this.titleClickCallback}/>);

    return (
        <div className="list-item">
            <div className="list-title">
                <h4>{this.props.title}</h4>
            </div>
            <div className="cards">
              {items}
            </div>
        </div>
      );
  }
}

export default ListItem;

