import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SummonerSearchPage from './pages/SummonerSearchPage'
import SummonerStatisticsPage from './pages/SummonerStatisticsPage'

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/summoner" exact component={SummonerSearchPage} />
        <Route path="/summoner/:summonerName" component={SummonerStatisticsPage} />
      </Router>
    </div>
  );
}

export default App;