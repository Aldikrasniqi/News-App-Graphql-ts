import React from 'react';
import Stories from './Stories';
import { gql } from 'urql';
import { Provider as UrqlProvider, createClient,debugExchange, cacheExchange, fetchExchange } from 'urql';


const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [debugExchange, cacheExchange, fetchExchange],
});

export default function App() {
  
  return (
    <UrqlProvider value={client}>
      <Stories />
    </UrqlProvider>
  );
}
