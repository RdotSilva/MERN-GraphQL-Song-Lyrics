import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

import FETCH_SONGS from "../queries/fetchSongs";

const SongList = () => {
	const { loading, error, data } = useQuery(FETCH_SONGS);

	const onSongDelete = id => {
		//
	};

	const renderSongs = () => {
		return data.songs.map(song => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
					<i className="material-icons" onClick={onSongDelete(song.id)}>
						delete
					</i>
				</li>
			);
		});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<ul className="collection">{renderSongs()}</ul>
			<Link to="/songs/new" className="btn-floating btn-large red right">
				+
			</Link>
		</div>
	);
};

// const query = gql`
// 	{
// 		songs {
// 			id
// 			title
// 		}
// 	}
// `;

export default SongList;
