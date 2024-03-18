import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProfileCards from "./components/ProfileCards";
import { HomePage } from "./components/HomePage";
import { FruitsList } from "./components/FruitsList";
import { Calcurator } from "./components/Calcurator";

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/profile-cards" element={<ProfileCards />} />
          <Route path="/fruits-list" element={<FruitsList />} />
          <Route path="/calculator" element={<Calcurator />} />
        </Routes>
    </Router>
  );
};

export default App;
