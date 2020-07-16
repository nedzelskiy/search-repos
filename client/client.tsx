import * as React from 'react';
import { Store } from 'redux';
import { hydrate } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { GraphQLClient } from 'graphql-request';
import './common.styles.scss';

const store: Store = configureStore((window as any).state || {}, {
  graphQLClient: new GraphQLClient(
    require('../.graphqlconfig').extensions.endpoints.github.url,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
      },
    },
  )
});

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
