//mapping for our urls

import React from "react";
import { Route, IndexRoute } from "react-router";
import PostsIndex from "./components/posts_index";
import App from "./components/app";
import PostsNew from './components/posts_new';


export default(
	<Route path="/" component={App} > //whenever the user is at this path "/" show this component {App}
		<IndexRoute component = {PostsIndex} /> //will show / and this route
		<Route path="posts/new" component={PostsNew} />
	</Route>
);