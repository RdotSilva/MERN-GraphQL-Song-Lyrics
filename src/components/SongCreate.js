import React, { useState } from "react";

const SongCreate = () => {
	const [songData, setSongData] = useState({
		title: ""
	});

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

export default SongCreate;
