import logo from './logo.svg';
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './utils/auth';
import { UserProvider } from './utils/GlobalState';
import NoMatch from './pages/NoMatch';
import Nuxe from './pages/Nuxe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const client = new ApolloClient({
  request: operation => {
      const token = localStorage.getItem('id_token');
      operation.setContext({
          headers: {
              authorization: token ? `Bearer ${token}` : ''
          }
      });
  },
  uri: '/graphql'
});

function App() {

  return (
      <ApolloProvider client={client}>
        <Router>
          <UserProvider>
            <div className="display-flex-column">
              <Header 
              />
              <Switch>
                <Route 
                  exact path='/' 
                  render={() => <Nuxe 
                  />}
                  />
                <Route component={NoMatch} />
              </Switch>
              <Footer 
              />
            </div>
          </UserProvider> 
        </Router>
      </ApolloProvider>
    );
}
export default App;
