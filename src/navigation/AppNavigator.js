import BarNavigator from './BarNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const BottomTabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName='BarNavigator'
      screenOptions={{
        headerTitle: 'Free Beer Bars',
      }}
    >
      <BottomTabs.Screen
        name='BarNavigator'
        options={{
          headerTitle: 'Best bars',
          tabBarLabel: 'Best bars',
          tabBarIcon: (props) => {
            return <Ionicons name='beer-sharp' {...props} />;
          },
        }}
        component={BarNavigator}
      />
      <BottomTabs.Screen
        options={{
          headerTitle: 'Cheap bars',
          tabBarLabel: 'Cheap bars',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name='beer-outline' {...props} />
          ),
        }}
        name='RestaurantNavigator'
        component={BarNavigator}
      />
    </BottomTabs.Navigator>
  );
};

export default AppNavigator;
