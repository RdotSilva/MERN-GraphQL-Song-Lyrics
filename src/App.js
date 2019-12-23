import React, { Component } from "react";
import "./style/style.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const cache = new InMemoryCache();

// URI is set for production (removed local host)
const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://mern-song-creator.herokuapp.com/graphql"
  }),
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
            {/* <Route path="/">
              <Redirect to="/songlist" />
            </Route> */}
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
