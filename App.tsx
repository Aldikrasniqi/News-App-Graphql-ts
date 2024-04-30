import React from 'react';
import { gql } from 'urql';
import {
  Provider as UrqlProvider,
  createClient,
  debugExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/screens/BottomTabs.navigator';


const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [debugExchange, cacheExchange, fetchExchange],
});

export default function App() {
  return (
    <UrqlProvider value={client}>
      <NavigationContainer>
        <StatusBar hidden />
        <BottomTabs />
      </NavigationContainer>
    </UrqlProvider>
  );
}
