import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Posts = ({ route, navigation }) => {
  const { userId } = route.params;
  const [posts, setPosts] = useState([]);
  const baseUrl = 'https://jsonplaceholder.typicode.com/';
  const postUrl = `${baseUrl}posts?userId=${userId}`;

  useEffect(() => {
    axios.get(postUrl).then((res) => setPosts(res.data));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.row}
          onPress={() =>
            navigation.navigate('Post Details', {
              postId: post.id,
            })
          }
        >
          <Text style={styles.rowText}>{post.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 8,
  },
  row: {
    backgroundColor: '#A2AAAD',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  rowText: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
