import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SearchBar } from './componnents/layouts/SearchBar';
import Logs from './componnents/logs/Logs';
import AddBtn from './componnents/layouts/AddBtn';
import AddLogModal from './componnents/layouts/AddLogModal';
import EditLogModal from './componnents/layouts/EditLogModal';
import AddTechModal from './componnents/layouts/techs/AddTechModal';
import TechListModal from './componnents/layouts/techs/TechListModal';

const App = () => {
  useEffect(() => {
    // Init Materialize
    M.AutoInit();
  });
  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />
          <Logs />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
