import React from "react";
import {
  AboutUs,
  Footer,
  Header,
  WorkSpace,
  ApiBox,
  Request,
  Response,
} from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <ApiBox />
    <Request />
    <Response />
    <Footer />

    <WorkSpace />
  </div>
);

export default App;
