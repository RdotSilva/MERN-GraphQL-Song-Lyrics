import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

import FETCH_SONG from "../queries/fetchSong";

const SongDetail = props => {
	const { loading, data } = useQuery(FETCH_SONG, {
		variables: { id: props.match.params.id }
	});

	if (loading) return <div />;

	const { song } = data;

	return (
		<div className="container">
			<Link to="/songlist" className="btn-floating btn-small blue">
				<i className="material-icons">arrow_back</i>
			</Link>
			<h3>{song.title}</h3>
			<LyricList />
			<LyricCreate songId={song.id} />
		</div>
	);
};

export default SongDetail;
