import React from "react";

import { useMutation } from "@apollo/react-hooks";

const LyricList = props => {
	console.log(props.lyrics);

	const { lyrics } = props;

	const renderLyrics = () => {
		return lyrics.map(lyric => {
			return (
				<li key={lyric.id} className="collection-item">
					{lyric.content}
					<i className="material-icons" onClick={() => onLike(id)}>
						thumb_up
					</i>
				</li>
			);
		});
	};
	return (
		<div>
			<ul className="collection">{renderLyrics()}</ul>
		</div>
	);
};

export default LyricList;
