import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component{

  render(){

    let navigatorItems = [ 
      { title: 'Alcoholic', path: '/alcoholic'},
      { title: 'Non-Alcoholic', path: '/non-alcoholic'},
      { title: 'Ordinary Drink', path: '/ordinary'},
      { title: 'Cocktail Glass', path: '/cocktail-glass'},
      { title: 'Champagne Flute', path: '/champagne-fluter'}
    ]
  

  let headerList = navigatorItems.map(item => <li key={item.title}><Link to={item.path}>{item.title}</Link></li>)                  

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

