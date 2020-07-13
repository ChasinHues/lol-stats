import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'
import SummonerApp from './containers/SummonerApp'

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/summoner/:summonerName" component={SummonerApp} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
