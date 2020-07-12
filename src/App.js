import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import SidebarAndContentLayout from './components/SidebarAndContentLayout'
import SummonerSummary from './components/SummonerSummary'
import SummonerStatistics from './components/SummonerStatistics'

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <SidebarAndContentLayout
        sidebar={<SummonerSummary />}
        content={<SummonerStatistics />}
      />
      <Footer />
    </div>
  );
}

export default App;
