import React from "react";

import { useMutation } from "@apollo/react-hooks";

import LIKE_LYRIC from "../queries/likeLyric";

const LyricList = props => {
	const [likeLyric] = useMutation(LIKE_LYRIC);

	const { lyrics } = props;

	const onLike = id => {
		likeLyric({
			variables: { id }
		});
	};

	const renderLyrics = () => {
		return lyrics.map(lyric => {
			return (
				<li key={lyric.id} className="collection-item">
					{lyric.content}
					<i className="material-icons" onClick={() => onLike(lyric.id)}>
						thumb_up
					</i>
					{lyric.likes}
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
