import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { RootStackParamList } from '../types/types';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useQuery } from 'urql';
import { gql } from 'urql';
import {
  StoryByIdQuery,
  StoryByIdQueryVariables,
} from '../graphql/__generated__/operationTypes';

const STORIES_QUERY = gql`
  query StoryById($id: ID!) {
    story(id: $id) {
      id
      title
      author
      text
      summary
    }
  }
`;

export default function StoryDetails() {
  const route = useRoute<RouteProp<RootStackParamList, 'StoryDetails'>>();
  const [{ data, error, fetching }] = useQuery<
    StoryByIdQuery,
    StoryByIdQueryVariables
  >({
    query: STORIES_QUERY,
    variables: { id: route.params.storyId },
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
  if (!data?.story) {
    return (
      <View style={styles.container}>
        <Text>Story not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.textPadding}>
      <Text style={styles.paragraph}>by {data.story.author}</Text>
      <Text style={styles.summary}>{data.story.summary}</Text>
      <Text>{data.story.text}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textPadding: {
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_indicator: {
    marginTop: 20,
  },
  summary: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: 'gray',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
