import React, { Component } from "react";
import "./style/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Switch>
						<Route exact path="/songlist" component={SongList} />
						<Route exact path="/songs/new" component={SongCreate} />
						<Route exact path="/songs/:id" component={SongDetail} />
					</Switch>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
