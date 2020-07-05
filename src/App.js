import React, { useState } from 'react';

import Routes from './routes';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header'

import './scss/main.scss';

const App = () => {
  const [separated, setSeparated] = useState(false);
  return (
    <div className="App">
      <Header />
      <div>
        <NavigationBar separated={separated} />
        <Routes separated={separated} setSeparated={setSeparated} />
      </div>
    </div>
  );
}

export default App;
