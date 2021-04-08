import React from "react";
import "./App.css";
// import Axios from "axios";

class App extends React.Component {
  componentDidMount() {
    // console.log("render mounted");
    if (navigator.geolocation) {
      // console.log("supported");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      // console.log("not supported");
    }
  }

  render() {
    return <div className='App'>RealTime weather App</div>;
  }
}

export default App;
