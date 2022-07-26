import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";

// import Register from "./assets/components/register";
// import Login from "./assets/components/login";
// import List from "./assets/components/Order_list/list";
import Profile from "./assets/components/Profile/profile";
import List from "./assets/components/Order_list/list";
import Dashboard from "./assets/components/Profile/dashboard";
import Address from "./assets/components/Profile/address";
import Account from "./assets/components/Profile/account";
import Info from "./assets/components/Profile/info";

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
        {/* <Route path="/" element={<List />} /> */}

        <Route path="/" element={<Profile />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<List />} />
          <Route path="/address" element={<Address />} />
          <Route path="/info" element={<Info />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}
