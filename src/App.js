import './App.css';
import {useState} from 'react'
import FirstPage from './pages/FirstPage'
import JoinMembership from './pages/JoinMembership'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/Join" element={<JoinMembership />} />
    </Routes>
  );
}

export default App;
