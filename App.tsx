import 'react-native-gesture-handler';
import React from 'react';
import AuthProvider from './src/Navigation/AuthProvider';
import Routes from './src/Navigation/Routes';
const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
