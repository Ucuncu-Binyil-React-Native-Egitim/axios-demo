import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Root } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
