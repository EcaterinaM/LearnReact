import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddCocktailPage from './pages/AddCocktailPage/AddCocktailPage';
import BaseDrinkPage from './pages/BaseDrinkPage/BaseDrinkPage';
import DrinkDetailsPage from './pages/DrinkDetailsPage/DrinkDetailsPage';

import PagePath from './constants/PagePath';
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route path={PagePath.Alcoholic} render={() => <BaseDrinkPage path={PagePath.Alcoholic} />}></Route>
          <Route path={PagePath.CocktailGlass} render={() => <BaseDrinkPage path={PagePath.CocktailGlass} />}></Route>
          <Route path={PagePath.ChampagneFlute} render={() => <BaseDrinkPage path={PagePath.ChampagneFlute} />}></Route>
          <Route path={PagePath.NonAlcoholic} render={() => <BaseDrinkPage path={PagePath.NonAlcoholic} />}></Route>
          <Route path={PagePath.Ordinary} render={() => <BaseDrinkPage path={PagePath.Ordinary} />}></Route>

          <Route path="/addCocktail" component={AddCocktailPage}></Route>

          <Route path="/details/:id" component={DrinkDetailsPage}></Route>
          <Route path="/" render={() => <BaseDrinkPage path={PagePath.Alcoholic} />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
