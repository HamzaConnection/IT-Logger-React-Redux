import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './componnents/layouts/SearchBar';
import Logs from './componnents/logs/Logs';
import AddBtn from './componnents/layouts/AddBtn';
import AddLogModal from './componnents/layouts/AddLogModal';
import EditLogModal from './componnents/layouts/EditLogModal';
import AddTechModal from './componnents/layouts/techs/AddTechModal';
import TechListModal from './componnents/layouts/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize
    M.AutoInit();
  });
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
};

export default App;
