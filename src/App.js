//import { render } from "react-dom";
import "./App.css";
import Contacts from "./Component/contacts/Contacts";
import Header from "./Component/Layout/Header";
import React, { Component } from "react";
import { Provider } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./Component/contacts/AddContact";
import EditContact from "./Component/contacts/EditContact";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import About from "./Component/Pages/About";
import NotFound from "./Component/Pages/NotFound";
import test from "./Component/Test/test";


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
             <Route exact path="/" component={Contacts} />
             <Route exact path='/contacts/add' component={AddContact} />
             <Route exact path='/contacts/edit/:id' component={EditContact} />
             <Route exact path='/about' component={About} />
             <Route exact path='/test' component={test} />

              <Route component={NotFound} />
            </Switch>
            
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
