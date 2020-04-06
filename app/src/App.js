import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AlcoholicPage from './components/pages/AlcoholicPage/AlcoholicPage';
import ChampagneFlutePage from './components/pages/ChampagneFlutePage/ChampagneFlutePage';
import CocktailGlassPage from './components/pages/CocktailGlassPage/CocktailGlassPage';
import DrinkDetailsPage from './components/pages/DrinkDetailsPage/DrinkDetailsPage';
import HomePage from './components/pages/HomePage/HomePage';
import OrdinaryPage from './components/pages/OrdinaryPage/OrdinaryPage';
import NonAlcoholicPage from './components/pages/NonAlcoholicPage/NonAlcoholicPage';

import './App.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route path="/alcoholic" component={AlcoholicPage}></Route>
          <Route path="/non-alcoholic" component={NonAlcoholicPage}></Route>
          <Route path="/ordinary" component={OrdinaryPage}></Route>
          <Route path="/cocktail-glass" component={CocktailGlassPage}></Route>
          <Route path="/champagne-fluter" component={ChampagneFlutePage}></Route>
          <Route path="/details/:id" component={DrinkDetailsPage}></Route>

          <Route path="/" component={HomePage}></Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
