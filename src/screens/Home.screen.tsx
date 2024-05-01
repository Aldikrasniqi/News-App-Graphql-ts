import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import { gql, useQuery } from 'urql';
import { useNavigation } from '@react-navigation/native';
import {
  AllstoriesQuery,
  AllstoriesQueryVariables,
} from '../graphql/__generated__/operationTypes';

import { RootStackParamList } from '../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const STORIES_QUERY = gql`
  query Allstories {
    stories {
      id
      title
      author
      summary
    }
  }
`;

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [{ data, error, fetching }] = useQuery<
    AllstoriesQuery,
    AllstoriesQueryVariables
  >({
    query: STORIES_QUERY,
  });

  if (fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.container_indicator}
        />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data?.stories}
      keyExtractor={(item) => item.id}
      style={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <Pressable
          style={styles.container_item}
          onPress={() =>
            navigation.navigate('StoryDetails', {
              storyId: item.id,
              title: item.title,
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.summary}>{item.summary}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  container_item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 5,
  },
  container_indicator: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: '#666',
  },
  summary: {
    fontSize: 14,
    color: '#999',
  },
});
