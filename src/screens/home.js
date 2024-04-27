import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios.get(url).then((res) => setUsers(res.data));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.row}
          onPress={() =>
            navigation.navigate('Posts', {
              userId: user.id,
            })
          }
        >
          <Text style={styles.rowText}>{user.name}</Text>
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
    fontWeight: '600',
    fontSize: 18,
  },
});
