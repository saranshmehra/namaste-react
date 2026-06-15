import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name"
      }
    };
  }

 async componentDidMount() {
  const data = await fetch("https://api.github.com/users/saranshmehra");
  const json = await data.json();
  this.setState({
    userInfo: json
  });
}

  render() {
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-class">
        <h2>Name: {name}</h2>
        <img src={avatar_url}></img> 
      </div>
    );
  }
}

export default User;
