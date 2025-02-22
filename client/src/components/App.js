import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StreamList from '../components/streams/StreamList';
import CreateStream from '../components/streams/CreateStream';
import DeleteStream from '../components/streams/DeleteStream';
import UpdateStream from '../components/streams/UpdateStream';
import ShowStream from '../components/streams/ShowStream';
import Navbar from './Navbar';

const App = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<StreamList />} />
        <Route path="/streams/new" element={<CreateStream />} />
        <Route path="/streams/:id" element={<ShowStream />} />
        <Route path="/streams/delete/:id" element={<DeleteStream />} />
        <Route path="/streams/update/:id" element={<UpdateStream />} />
      </Routes>
    </section>
  );
};

export default App;
