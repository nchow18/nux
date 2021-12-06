import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './utils/auth';
import { UserProvider } from './utils/GlobalState';
import NoMatch from './pages/NoMatch';
import Nuxe from './pages/Nuxe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopDisplay from './components/TopDisplay/TopDisplay';
import Products from './pages/Products';
import './App.css';
import './css/standard.css';

function App() {

  return (
        <Router>
            <div className="display-flex-column nuxe-colour page-font">
              <TopDisplay />
              <Header 
              />
              <Switch>
                <Route 
                  exact path='/' 
                  render={() => <Nuxe 
                  />}
                  />
                <Route exact path='/products' render={() => <Products />} />
                <Route component={NoMatch} />
              </Switch>
              <Footer 
              />
            </div>
        </Router>
    );
}
export default App;
