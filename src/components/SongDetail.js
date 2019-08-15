import React from "react";
import { useQuery } from "@apollo/react-hooks";

import FETCH_SONG from "../queries/fetchSong";

const SongDetail = props => {
	const { loading, data } = useQuery(FETCH_SONG, {
		variables: { id: props.match.params.id }
	});

	if (loading) return <h1>Loading</h1>;

	console.log(data);

	return (
		<div>
			<h3>Song Detail</h3>
		</div>
	);
};

export default SongDetail;
