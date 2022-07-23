import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";

// Login & Register
import Register from "./assets/components/register";
import Login from "./assets/components/login";
import List from "./assets/components/Order_list/list";

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
        {/* <Route path="/" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}
