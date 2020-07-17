import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SummonerSearchPage from './pages/SummonerSearchPage'
import SummonerStatisticsPage from './pages/SummonerStatisticsPage'

import { Layout } from 'antd'

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/summoners" exact component={SummonerSearchPage} />
        <Route path="/summoners/:summonerName" component={SummonerStatisticsPage} />
      </Layout>
    </Router>
  );
}

export default App;