import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<h1>App is running</h1>
			</ApolloProvider>
		);
	}
}

export default App;
