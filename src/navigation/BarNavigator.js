import { createStackNavigator } from '@react-navigation/stack';
import Bars from '../screens/Bars';
import BarDetails from '../screens/BarDetails';
const Stack = createStackNavigator();

const BarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Bars'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Bars' component={Bars} />
      <Stack.Screen name='BarDetails' component={BarDetails} />
    </Stack.Navigator>
  );
};

export default BarNavigator;
