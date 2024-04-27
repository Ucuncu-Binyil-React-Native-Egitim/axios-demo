import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Posts } from '../screens/posts';
import { PostDetails } from '../screens/postDetails';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Users',
        }}
      />
      <Stack.Screen name='Posts' component={Posts} />
      <Stack.Screen name='Post Details' component={PostDetails} />
    </Stack.Navigator>
  );
};
