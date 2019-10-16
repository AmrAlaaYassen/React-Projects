import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModel from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
  useEffect(() => {
    //Initialize materialize
    M.AutoInit();
  });
  return (
    <div className='App'>
      <SearchBar />
      <div className='container'>
        <Logs />
        <AddTechModal />
        <AddLogModel />
        <EditLogModal />
        <TechListModal />
        <AddBtn />
      </div>
    </div>
  );
}

export default App;
