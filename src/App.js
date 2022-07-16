import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Auth/Login';
import Profile from './pages/Auth/Profile';
import Register from './pages/Auth/Register';
import Reset from './pages/Auth/Reset';
import EditContact from './pages/Contact/EditContact';
import AddContact from './pages/Contact/AddContact';
import Contacts from './pages/Contact/Contacts';
import Error from './pages/Error';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      {/* Global Routes */}
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />} />

      {/* Auth Routes */}
      <Route path='/sign-in' element={<Login />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='/reset' element={<Reset />} />

      {/* Profile Route */}
      <Route path='/user/profile' element={<Profile />} />

      {/* Contact Routes */}
      <Route path='/user' element={<Contacts />} />
      <Route path='/user/create-contact' element={<AddContact />} />
      <Route path='/user/edit-contact/:id' element={<EditContact />} />
    </Routes>
  );
}

export default App;
