import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../components/Hero";
import Leads from "../components/Content";

const Home = () => {
  const { isAuthenticated } = useAuth0();  // Use the Auth0 hook to get the authentication status

  return (
    <Fragment>
      <Hero />
      <hr />
      {isAuthenticated && <Leads />}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4>  Please login to check all leads</h4>
      
      </div>
    </Fragment>
  );
};

export default Home;
