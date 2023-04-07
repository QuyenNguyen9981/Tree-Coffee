import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Contact from "./views/Contact/Contact";
import HomePages from "./views/Homepages/HomePages";
import Menus from "./views/Menus/Menus";
import OurStory from "./views/ourStory/OurStory";
import Promotion from "./views/promotion/Promotion";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePages />} />
        <Route path="/menu" element={<Menus />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/contactus" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
