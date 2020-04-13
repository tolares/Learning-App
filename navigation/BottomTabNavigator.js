import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AboutScreen from "../screens/AboutScreen";
import UserScreen from "../screens/profile/index";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}
export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Learn',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
        <BottomTab.Screen
            name="Chatbox"
            component={LinksScreen}
            options={{
                title: 'Resources',
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
            }}
        />
        <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
                title: 'User',
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
            }}
        />
        <BottomTab.Screen
            name="Info"
            component={AboutScreen}
            options={{
                title: 'About',
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-information-circle" />,
            }}
        />

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Learn English';
    case 'Chatbox':
      return 'List of words';
      case 'User':
          return 'Profile'
  }
}
