import React from "react";
import { getEnvironment } from "../services/envService";

const Home = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Deployment Successful 🎉</h2>
      <p>
        Environment: <strong>{getEnvironment()}</strong>
      </p>
    </div>
  );
};

export default Home;
