import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostDetails = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);
  console.log(postId);
  const url = `https://jsonplaceholder.typicode.com/posts?id=${postId}`;

  useEffect(() => {
    axios.get(url).then((res) => setPost(res.data[0]));
  }, []);

  return (
    <View style={styles.container}>
      {post === null ? (
        <Text>Yükleniyor</Text>
      ) : (
        <>
          <View style={styles.title}>
            <Text style={styles.titleText}>{post.title}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {post.body.replaceAll('\n', ' ')}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    textTransform: 'capitalize',
    textAlign: 'center',
    maxWidth: '75%',
  },
  body: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  bodyText: { textAlign: 'center' },
});
