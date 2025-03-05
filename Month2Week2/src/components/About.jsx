import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> This is about Page</h1>
      <button onClick={() => navigate("/")}> Back to Home Page</button>
    </div>
  );
}

export default About;
