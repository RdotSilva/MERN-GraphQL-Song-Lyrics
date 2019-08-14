import React, { useState } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
		<div className="container">
			<Link to="/songlist" className="btn-floating btn-small blue">
				Back
			</Link>
			<h1>Create a new song!</h1>
			<form onSubmit={onSubmit}>
				<label>Song Title:</label>
				<input name="title" onChange={e => onChange(e)} value={title} />
			</form>
		</div>
	);
};

const ADD_SONG = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;

export default SongCreate;
