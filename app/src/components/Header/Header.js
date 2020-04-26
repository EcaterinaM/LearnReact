import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {

  render() {
    let navigatorPaths = [
      { title: 'Alcoholic', path: '/alcoholic' },
      { title: 'Non-Alcoholic', path: '/non-alcoholic' },
      { title: 'Ordinary Drink', path: '/ordinary' },
      { title: 'Cocktail Glass', path: '/cocktail-glass' },
      { title: 'Champagne Flute', path: '/champagne-flute' }
    ];

    let headerItems = navigatorPaths.map(item => <Link className="header-link" to={item.path} key={item.path}>{item.title}</Link>);

    return (
      <div className="header">
        <div className="title">
          <h1>Cocktails</h1>
        </div>
        <ul className="header-items">
          {headerItems}
        </ul>
      </div>
    );
  }
}

export default Header;

