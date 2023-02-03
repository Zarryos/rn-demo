import React from 'react';
import {Provider} from 'react-redux';
import Users from './src/Containers/Users/Users';
import store from './src/Stores/Redux/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * @returns The app wrapper
 */
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Users">
          <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
