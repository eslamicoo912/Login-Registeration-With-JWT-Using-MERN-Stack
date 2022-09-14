import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Registeration from "./pages/Registeration/Registeration";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";

const App = () => {
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");

  return (
    <>
      <Router>
        <div className="container mt-5">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Dashboard id={id} username={username} />}
            />
            <Route path="/register" element={<Registeration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
