import React, { Component } from 'react';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Events from './Events';
import ScrollTop from './ScrollTop';


class App extends Component {
  render() {

    return (

      <BrowserRouter>
      <ScrollTop>
        <div>
      <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/events" component={Events}/>


      </Switch>
        </div>
        </ScrollTop>
      </BrowserRouter>

    );
    }
  }


export default App;
