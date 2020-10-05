import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';
import Header from './header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    </div>
  );
};

export default App;
