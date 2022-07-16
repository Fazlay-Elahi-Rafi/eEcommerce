import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";

// Login & Register
import Register from "./assets/components/00-auth/register";
import Login from "./assets/components/00-auth/login";

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Nunito Sans", "Roboto", "Oswald", "Vast Shadow", "Lobster"],
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
