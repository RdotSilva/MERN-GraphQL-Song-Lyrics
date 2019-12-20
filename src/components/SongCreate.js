import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import NavBar from "../components/layout/NavBar";

const SongCreate = props => {
  const [songData, setSongData] = useState({
    title: ""
  });

  const [addSong, { data, called }] = useMutation(ADD_SONG, {
    refetchQueries: ["FetchSongs"]
  });

  const { title } = songData;

  const onChange = e => {
    setSongData({ ...songData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addSong({ variables: { title: title } });
    props.history.goBack();
  };

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="container">
        <h1 style={headerStyle}>Create a new song!</h1>
        <form onSubmit={onSubmit}>
          <label>Song Title:</label>
          <input name="title" onChange={e => onChange(e)} value={title} />
        </form>
        <Link
          to="/songlist"
          className="btn-floating btn-small blue"
          style={backArrowStyle}
        >
          <i className="material-icons">arrow_back</i>
        </Link>
      </div>
    </Fragment>
  );
};

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const headerStyle = {
  textAlign: "center",
  padding: "5px"
};

const backArrowStyle = {
  margin: "5px"
};

export default SongCreate;
