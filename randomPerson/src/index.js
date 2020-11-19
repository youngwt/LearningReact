import React from "react";
import { render } from "react-dom";
import MemberList from "./memberList";
window.React = React;

render(<MemberList />, document.getElementById("react-container"));
