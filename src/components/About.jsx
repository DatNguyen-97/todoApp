// ./Components/About.js
import React from "react";
import { useParams } from "react-router";

const About = () => {
  let param = useParams();
  console.log(param)
  return (
    <div>
      <div>
        <h2>ID: {param.id}</h2>
      </div>
    </div>
  );
};

export default About;