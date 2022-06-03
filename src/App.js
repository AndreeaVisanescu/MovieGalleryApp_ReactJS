import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Watchlist from './components/Watchlist';
import Favorites from './components/Favorites';
import Categories from './components/Categories';
import SearchList from './components/SearchList';
import Trending from './components/Trending';
import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div id='body'>
      <GlobalProvider>
      <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Trending} />
            <Route path='/watchlist' exact component={Watchlist} />
            <Route path='/favorites' exact component={Favorites} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/search' component={SearchList} />
          </Switch>
          <Footer />
        </Router>
    </GlobalProvider>
   </div>
  );
}

export default App;
