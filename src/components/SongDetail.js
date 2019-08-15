import React from "react";
import { useQuery } from "@apollo/react-hooks";

import FETCH_SONG from "../queries/fetchSong";

const SongDetail = props => {
	const { loading, data } = useQuery(FETCH_SONG, {
		variables: { id: props.match.params.id }
	});

	if (loading) return <div />;

	const { song } = data;

	return (
		<div>
			<h3>{song.title}</h3>
		</div>
	);
};

export default SongDetail;
