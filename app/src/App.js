import React from 'react';

import './App.css';

import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import Title from './components/Title';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
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
  }

  render(){

    const users = this.state
    return (
      <div className="main-container">
        <h1>My base App react component</h1>
        <Title />
        <ShoppingCard users={users} />
      </div>        
    );
  }
}

export default App;

