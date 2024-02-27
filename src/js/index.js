//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter = 0
const refresh = () =>{
    ReactDOM.render(<Home />, document.querySelector("#app"));
    counter++;
}

setInterval(refresh,1000)

