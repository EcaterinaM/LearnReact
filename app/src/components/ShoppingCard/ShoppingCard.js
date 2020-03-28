import React from 'react';

import './ShoppingCard.css';

class ShoppingCard extends React.Component{

   sum(...args){
     let result = 0;
     args.forEach(a => result += a);
     return result;
   }

  render(){
      let {name, surname, shoppingList} = this.props.users;
      let prices = shoppingList.map(sl => sl.price);
      let totalPrice = this.sum(...prices);
   
      return (
       <div className="shopping-card">
         <span>Name: {name}</span>  
         <span>Surname: {surname}</span>
         <span>To pay: {totalPrice} LEI</span>
      </div>
    );
  }
}

export default ShoppingCard;
