import React, { Component } from 'react';
import MovieView from './components/MovieView';
import Search from './components/Search'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faArrowRight)

class App extends Component {

  render() {

    return (

      <div>
        <Router basename="/">
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/movie" component={MovieView} />
              <Route exact path="/search-results" component={Search} />
            </Switch>

          </div>
        </Router>

      </div>

    );
  }
}

export default App;
