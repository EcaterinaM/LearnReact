import React from 'react';

import ShoppingCard from './ShoppingCard/ShoppingCard';

function ShoppingList(){

  const users = {
    name: 'Ecaterina',
    surname: 'M.',
    shoppingList: [
      {
        itemName: 'Bread',
        price: 5,
      },
      {
        itemName: 'Water',
        price: 3
      },
      {
        itemName: 'Wine',
        price: 40
      }
    ]
  };

    return (
      <div>
        <ShoppingCard users={users} />
      </div>
    );
}

export default ShoppingList;

