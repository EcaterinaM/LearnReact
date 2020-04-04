import React from 'react';

import './Header.scss';

class Header extends React.Component{

  render(){
    let items = ['Alcoholic', 'Non Alcoholic', 'Ordinary Drink',
                 'Cocktail Glass', 'Champagne Flute'];

    let headerList = items.map(item => <li key={item}>{item}</li>)                  

    return (
      <div className="header">
        <div className="title">
            <h1>Cocktails</h1>
        </div>
        <ul className="header-items">
          {headerList}
        </ul>          
      </div>
    );
  }
}

export default Header;

