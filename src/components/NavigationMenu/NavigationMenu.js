import './navigation-menu.css';
import React, { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import DriftPage from './DriftPage/DriftPage';
import TimeAttackPage from './TimeAttackPage/TimeAttackPage';
import ForzaPage from './ForzaPage/ForzaPage';

export default function NavigationMenu() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
