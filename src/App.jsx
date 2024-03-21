import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCards from "./components/ProfileCards";
import { HomePage } from "./components/HomePage";
import { FruitsList } from "./components/FruitsList";
import { Calcurator } from "./components/Calcurator";
import { RecipeCollector } from "./components/RecipeCollector";
import { TwitterPreview } from "./components/TwitterPreview";
import { PostalAutoFill } from "./components/PostalAuto-Fill";
import { CrossComponentCommunication } from "./components/CrossComponentCommunication";
import { Home } from "./components/Home";
import { AboutPage } from "./components/AboutPage";
import { UserProvider } from "./components/UserContext";
import Todo from "./components/Todo";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile-cards" element={<ProfileCards />} />
          <Route path="/fruits-list" element={<FruitsList />} />
          <Route path="/calculator" element={<Calcurator />} />
          <Route path="/recipe-collector" element={<RecipeCollector />} />
          <Route path="/twitter-preview" element={<TwitterPreview />} />
          <Route path="/postal-autofill" element={<PostalAutoFill />} />
          <Route
            path="/cross-component-communication"
            element={<CrossComponentCommunication />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
