import User from "./User";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About us</h1>
        <h2>Learning React with Akshay Saini</h2>
        <User name={"Saransh Mehra"} location={"Bangalore"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>Learning React with Akshay Saini</h2>
//       <User name={"Saransh Mehra"} location={"Bangalore"} />
//     </div>
//   );
// };

export default About;
