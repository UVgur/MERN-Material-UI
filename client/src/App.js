import React from 'react';
import FormDialog from './components/FormDialog'
import AppNabar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store'

import './App.css';


//in charge the page view, organize components and html elements(jsx)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
        <AppNabar/>
        <hr/>
          <FormDialog />
        <br/>
          <ShoppingList/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
