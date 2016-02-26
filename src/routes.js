//mapping for our urls

import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";

export default(
	<Route path="/" component={App} /> //whenever the user is at this path "/" show this component {App}
)