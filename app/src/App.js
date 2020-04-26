import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AlcoholicPage from './pages/AlcoholicPage/AlcoholicPage';
import CocktailGlassPage from './pages/CocktailGlassPage/CocktailGlassPage';
import ChampagneFlutePage from './pages/ChampagneFlutePage/ChampagneFlutePage';
import DrinkDetailsPage from './pages/DrinkDetailsPage/DrinkDetailsPage';
import NonAlcoholicPage from './pages/NonAlcoholicPage/NonAlcoholicPage';
import OrdinaryPage from './pages/OrdinaryPage/OrdinaryPage';

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
          <Route path="/champagne-flute" component={ChampagneFlutePage}></Route>
          <Route path="/details/:id" component={DrinkDetailsPage}></Route>
          <Route path="/" component={AlcoholicPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
