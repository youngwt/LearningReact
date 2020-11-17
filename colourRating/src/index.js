import React from "react";
import { render } from "react-dom";
import App from "./app";
import data from "./data"
window.React = React;

render(<App colours={data}/>, document.getElementById("react-container"));