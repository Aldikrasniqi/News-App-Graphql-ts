import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { gql, useQuery } from 'urql';

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

export default function Stories() {
  const [{ data, error, fetching }] = useQuery({ query: STORIES_QUERY });

  if (fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
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
    <ScrollView style={styles.container}>
      {data.stories.map((story: any) => (
        <View style={styles.container_item} key={story.id}>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.author}>{story.author}</Text>
          <Text style={styles.summary}>{story.summary}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    marginTop: 50,
  },
  container_item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 5,
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
