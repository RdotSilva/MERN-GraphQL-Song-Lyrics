import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";

import ADD_LYRIC from "../queries/addLyric";

const LyricCreate = props => {
	const [content, setContent] = useState("");

	const [addLyricToSong, { data, called }] = useMutation(ADD_LYRIC, {
		refetchQueries: ["FetchSongs"]
	});

	const handleInputChange = content => {
		setContent(content);
	};

	const onSubmit = e => {
		e.preventDefault();
		addLyricToSong({
			variables: { content: content, songId: props.songId }
		}).then(() => setContent(""));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>Add a Lyric</label>
				<input
					value={content}
					onChange={e => handleInputChange(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default LyricCreate;
