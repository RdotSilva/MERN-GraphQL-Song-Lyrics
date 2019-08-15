import React, { useState } from "react";

const LyricCreate = () => {
	const [content, setContent] = useState("");

	return (
		<div>
			<form>
				<label>Add a Lyric</label>
				<input />
			</form>
		</div>
	);
};

export default LyricCreate;
