import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AlcoholicPage from './pages/AlcoholicPage/AlcoholicPage';
import ChampagneFlutePage from './pages/ChampagneFlutePage/ChampagneFlutePage';
import CocktailGlassPage from './pages/CocktailGlassPage/CocktailGlassPage';
import DrinkDetailsPage from './pages/DrinkDetailsPage/DrinkDetailsPage';
import NonAlcoholicPage from './pages/NonAlcoholicPage/NonAlcoholicPage';
import OrdinaryPage from './pages/OrdinaryPage/OrdinaryPage';

import PagePath from './constants/PagePath';
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route path={PagePath.Alcoholic} component={AlcoholicPage}></Route>
          <Route path={PagePath.CocktailGlass} component={CocktailGlassPage}></Route>
          <Route path={PagePath.ChampagneFlute}component={ChampagneFlutePage}></Route>
          <Route path={PagePath.NonAlcoholic} component={NonAlcoholicPage}></Route>
          <Route path={PagePath.Ordinary} component={OrdinaryPage}></Route>
          
          <Route path="/details/:id" component={DrinkDetailsPage}></Route>
          <Route path="/" component={AlcoholicPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
