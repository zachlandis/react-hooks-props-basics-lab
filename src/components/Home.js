import React from "react";

function Home(props) {
  return (
    <div id="home">
      {/* {console.log(props)} */}
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
