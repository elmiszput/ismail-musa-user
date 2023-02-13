import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ColImage from './components/colimage/ColImage'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ColImage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App