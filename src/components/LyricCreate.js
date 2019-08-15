import React, { useState } from "react";

const LyricCreate = () => {
	const [content, setContent] = useState("");

	const handleInputChange = content => {
		setContent(content);
	};

	const onSubmit = e => {
		e.preventDefault();
		// addSong({ variables: { title: title } });
		// props.history.goBack();
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
