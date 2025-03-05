import { useNavigate } from "react-router-dom";
import React from "react";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is home Page </h1>
      <button onClick={() => navigate("/Contacts")}>Go to Contacts Page</button>
      <br />
      <button onClick={() => navigate("/About")}>Go to About Page</button>
    </div>
  );
}

export default Home;
