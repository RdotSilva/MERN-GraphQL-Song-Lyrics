import React, { useState } from "react";

const LyricCreate = () => {
	const [content, setContent] = useState("");

	const handleInputChange = content => {
		setContent(content);
	};

	return (
		<div>
			<form>
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
