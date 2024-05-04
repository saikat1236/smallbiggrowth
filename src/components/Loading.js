import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" style={{ width: '100%', height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
  </div>
);

export default Loading;
