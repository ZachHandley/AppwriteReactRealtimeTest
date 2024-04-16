import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RealtimeSubscriber from "./RealtimeSubscriber";
import AnotherPage from "./AnotherPage";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/another">
          <button>Go to Another Page</button>
        </Link>
      </header>
      <RealtimeSubscriber />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
