import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { Link } from "react-router-dom";

import FETCH_SONGS from "../queries/fetchSongs";
import DELETE_SONG from "../queries/deleteSong";

const SongList = () => {
	const { loading, error, data } = useQuery(FETCH_SONGS);

	const [deleteSong] = useMutation(DELETE_SONG, {
		refetchQueries: ["FetchSongs"]
	});

	const onSongDelete = id => {
		deleteSong({
			variables: { id }
		});
	};

	const renderSongs = () => {
		return data.songs.map(song => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
					<i className="material-icons" onClick={() => onSongDelete(song.id)}>
						delete
					</i>
				</li>
			);
		});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div className="container">
			<ul className="collection">{renderSongs()}</ul>
			<Link to="/songs/new" className="btn-floating btn-large red right">
				<i className="material-icons">add</i>
			</Link>
		</div>
	);
};

export default SongList;
