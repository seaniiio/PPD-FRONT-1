import './App.css'
import { useState } from 'react'
import FirstPage from './pages/FirstPage'
import JoinMembership from './pages/JoinMembership'
import MainPage from './pages/MainPage'
import Record from './pages/Record'
import MyInformation from './pages/MyInformation'
import MyRecords from './pages/MyRecords'
import Guideline from './pages/Guideline'
import Loading from './pages/Loading'
import Normal from './pages/Normal'
import Abnormal from './pages/Abnormal'
import Result from './pages/Result'
import ResultDetail from './pages/ResultDetail'
import EditInformation from './pages/EditInformation'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/Join" element={<JoinMembership />} />
      <Route path="/Main" element={<MainPage />} />
      <Route path="/Record" element={<Record />} />
      <Route path="/MyInfo" element={<MyInformation />} />
      <Route path="/MyRecords" element={<MyRecords />} />
      <Route path="/Guideline" element={<Guideline />} />
      <Route path="/Loading" element={<Loading />} />
      <Route path="/Normal" element={<Normal />} />
      <Route path="/Abnormal" element={<Abnormal />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/Result/:id" element={<Result />} />
      <Route path="/ResultDetail" element={<ResultDetail />} />
      <Route path="/EditInfo" element={<EditInformation />} />
    </Routes>
    
  )
}

export default App
