import React, { useState } from "react";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const SongCreate = () => {
	const [songData, setSongData] = useState({
		title: ""
	});

	const [addSong, { data }] = useMutation(ADD_SONG);

	const { title } = songData;

	const onChange = e => {
		setSongData({ ...songData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Create a new song!</h1>
			<form onSubmit={onSubmit()}>
				<label>Song Title:</label>
				<input name="title" onChange={e => onChange(e)} value={title} />
			</form>
		</div>
	);
};

const ADD_SONG = gql`
	mutation AddSong($title: String) {
		addSong(title: $title)
	}
`;

export default SongCreate;
