import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

import NavBar from "./layout/NavBar";

import FETCH_SONG from "../queries/fetchSong";

const SongDetail = props => {
  const { loading, data } = useQuery(FETCH_SONG, {
    variables: { id: props.match.params.id }
  });

  if (loading) return <div />;

  const { song } = data;

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="container">
        <h3 style={songTitleStyle}>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
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

const backArrowStyle = {
  margin: "5px"
};

const songTitleStyle = {
  padding: "10px",
  textAlign: "center"
};

export default SongDetail;
