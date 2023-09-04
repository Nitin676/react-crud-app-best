import React from "react";
import Create from "./Create";
import Read from "./Read";
// import Update from "./Update";

const Home = () => {
  return (
    <div className="homePage">     
      <Create /> 
      <Read />      
    </div>
  );
};

export default Home;
