import React, { Component } from "react";
import ReactDom from "react-dom";

import "./index.css"
import "babel-polyfill";

import App from './component/App'
ReactDom.render(<App />, document.getElementById("app"));
