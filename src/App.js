import './App.css';
import {useState} from 'react'
import FirstPage from './pages/FirstPage'
import JoinMembership from './pages/JoinMembership'
import MainPage from './pages/MainPage'
import Measure from './pages/Measure'
import MyInformation from './pages/MyInformation';
import MyRecords from './pages/MyRecords';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/Join" element={<JoinMembership />} />
      <Route path="/Main" element={<MainPage />} />
      <Route path="/Measure" element={<Measure />} />
      <Route path="/MyInfo" element={<MyInformation />} />
      <Route path="/MyRecords" element={<MyRecords />} />
    </Routes>
  );
}

export default App;
