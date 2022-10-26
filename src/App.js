// Libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Report from './pages/Report';
import Loading from './pages/Loading';
import Confirmation from './pages/Confirmation';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Auth/ProtectedRoute';

// Files
import content from './client/content';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home content={content.Home} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq"
            element={
              <ProtectedRoute>
                <FAQ content={content.FAQ} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute>
                <Report content={content.Report} />
              </ProtectedRoute>
            }
          />
          <Route path="/loading" element={<Loading content={content.Loading} />} />
          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <Confirmation content={content.Confirmation} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
