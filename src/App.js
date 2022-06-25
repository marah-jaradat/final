import React from "react";
import {
  AboutUs,
  Api,
  Auth,
  FindUs,
  Footer,
  Header,
  History,
  Intro,
  Team,
  WorkSpace,
} from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />

    <Footer />
    <History />
    <Intro />
    <WorkSpace />
  </div>
);

export default App;
//  <Api />
// <Auth />
// <FindUs />
