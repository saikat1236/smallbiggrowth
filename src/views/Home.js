import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Leads from "../components/Content";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    {!isAuthenticated && (
      <Leads />
      )}
    
  </Fragment>
);

export default Home;
