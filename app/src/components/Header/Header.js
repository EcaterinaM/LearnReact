import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header(){

  const [navigatorPaths] = useState([
    { title: 'Alcoholic', path: '/alcoholic' },
    { title: 'Non-Alcoholic', path: '/non-alcoholic' },
    { title: 'Ordinary Drink', path: '/ordinary' },
    { title: 'Cocktail Glass', path: '/cocktail-glass' },
    { title: 'Champagne Flute', path: '/champagne-flute' }
  ]);

  return (
    <div className="header">
      <div className="title">
        <h1>Cocktails</h1>
      </div>
      <ul className="header-items">
        {navigatorPaths.map(item => <Link className="header-link" to={item.path} key={item.path}>{item.title}</Link>)}
      </ul>
    </div>
  );
}

export default Header;

