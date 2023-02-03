import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  //StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import Users from './src/Containers/Users/UsersContainer';
import store from './src/Stores/Redux/index';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Users />
      </SafeAreaView>
    </Provider>
  );
};

//const styles = StyleSheet.create({});

export default App;
