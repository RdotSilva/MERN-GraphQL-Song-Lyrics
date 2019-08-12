import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<Switch>
						<Route exact path="/songlist" component={SongList} />
						<Route exact path="/songs/new" component={SongCreate} />
					</Switch>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
