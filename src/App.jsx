import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Formation from './Components/Formation';
import Equipe from './Components/Equipe';
import Contact from './Components/Contact';
import Acceuil from './Components/Acceuil';
import Evenements from './Components/Evenements';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Acceuil/>} />
          <Route path="formation" element={<Formation />} />
          <Route path="equipe" element={<Equipe/>} />
          <Route path="evenements" element={<Evenements />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
