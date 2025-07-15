import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import ScriptureCompanion from './pages/ScriptureCompanion';
import Commandments from './pages/Commandments';
import GreatestCommandments from './pages/GreatestCommandments';
import DietaryLaw from './pages/DietaryLaw';
import Sabbath from './pages/Sabbath';
import Festivals from './pages/Festivals';
import QAndA from './pages/QAndA';
import Mentors from './pages/Mentors';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/scripture-companion" element={<ScriptureCompanion />} />
                <Route path="/commandments" element={<Commandments />} />
                <Route path="/greatest-commandments" element={<GreatestCommandments />} />
                <Route path="/dietary-law" element={<DietaryLaw />} />
                <Route path="/sabbath" element={<Sabbath />} />
                <Route path="/festivals" element={<Festivals />} />
                <Route path="/qa" element={<QAndA />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;