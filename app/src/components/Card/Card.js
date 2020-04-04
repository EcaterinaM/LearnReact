import React from 'react';

import './Card.css';

class Card extends React.Component{

  constructor(props){
        super(props);
  }

  render(){

    const onImageClick = (name) => { this.props.onImageClickCallback(name); }
    const onTitleClick = (name) => { this.props.onTitleClickCallback(name); }

    return (
      <div className="card" >
        <div className="card-image" 
             onClick={() => onImageClick(this.props.name)}>
          <img src={this.props.imagePath} alt={this.props.name}/>
        </div>
       <div className="card-title"
            onClick={()=> onTitleClick(this.props.name)}>
         {this.props.name}
       </div>
  </div>);
  }
}

export default Card;

