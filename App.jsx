import { StyleSheet, Text, View } from 'react-native';
import { RegisterPage } from './src/pages/Account/RegisterPage';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
const App = () => {
  return (
  <Provider store={store}>
    <RegisterPage />;
  </Provider>)
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
