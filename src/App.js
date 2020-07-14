import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SummonerSearchPage from './pages/SummonerSearchPage'
import SummonerStatisticsPage from './pages/SummonerStatisticsPage'

import { Layout } from 'antd'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Content>
          <Route path="/" exact component={HomePage} />
          <Route path="/summoner" exact component={SummonerSearchPage} />
          <Route path="/summoner/:summonerName" component={SummonerStatisticsPage} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;