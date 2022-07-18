import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateStream from '../components/streams/CreateStream';
import DeleteStream from '../components/streams/DeleteStream';
import UpdateStream from '../components/streams/UpdateStream';
import ShowStream from '../components/streams/ShowStream';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="ui container">
      <Routes>
        <Navbar />
        <Route path="/" element={<CreateStream />} />
        <Route path="/new" element={<DeleteStream />} />
        <Route path="/show" element={<ShowStream />} />
        <Route path="/update" element={<UpdateStream />} />
      </Routes>
    </div>
  );
};

export default App;
