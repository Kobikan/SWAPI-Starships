import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import Routes from './services/routes';
import history from './services/history';
import './index.css';

import { gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://swapibe.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <Router history={history}>
          <Routes />
      </Router>
    </ApolloProvider>,
    document.getElementById('root'),
);
