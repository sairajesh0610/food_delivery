import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link,Redirect,Switch,HashRouter } from "react-router-dom";
import store from "./reducers/Store";
import {Provider} from 'react-redux';
import HomePage from './containers/HomePage';
import CartPage from './containers/CartPage';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  
  render(){
    return (
      <Provider store={store}>
        <Router  basename={'/'}>
          <Switch>
            <Route exact path="/" handler={App} component={HomePage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
       
        </Router>
      </Provider>
    )
  }

}
