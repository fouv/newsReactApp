import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import HomePage from './HomePage';
import MyArticles from './MyArticles';
import ThemeArticles from './ThemeArticles'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* 1 er jour 
	1) Mettre en place React
	2) Créer 3 pages.js et une nav (Menu de antDesign)
	3) Insérer react router dans appj.js et connecter les composants avec les routes 
	4) Insérer antdesign dans le projet
	4) Styliser un peu la Nav et le Sign-in/Sign-Up avec composant Input de antdesign
	5) Se rensegner sur L’api, avoir une Key et faire des test avec postman
	6) Dans le composant Homepage, dans un component did mount, fetcher en async await les données de l’API
	7) mettre à jour le state ThemeList par le résultat de cette requête
	8) Renvoyer dans le render une List (antDesign) qui boucle sur l’ensemble de notre state ThemList
	9) Mettre un peu de style sur les titre 
	10) Dans le composant MyArticle, insérer une card de antdesign, changer deux trois petite choses pour arriver à la card voulu classic,
  11) Créer un tableau d’objet de données Dur, puis boucler sur ce tableau en revoyant des cards dynamique pour chaque éléments.
  
  */

class App extends Component {

  render() {

    return (

      <Router>
            <div className="App">
                  <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/HomePage" component={HomePage} />
                      <Route path="/ThemeArticles/:id" component={ThemeArticles} />
                      <Route path="/MyArticles" component={MyArticles} />
                  </Switch>
            </div>
      </Router>

    );
  }
}

export default App;