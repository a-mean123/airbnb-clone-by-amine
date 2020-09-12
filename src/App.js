
import React from 'react';
import {BrowserRouter as Router,   Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
     <Header />
     
      <Router>

        <Switch>
               <Route path="/search">

                   <SearchPage />
               </Route>



            <Route path="/">

                 <Home />
            </Route>

        </Switch>

      </Router>
     
     
    
      <Footer />

    </div>
  );
}

export default App;
