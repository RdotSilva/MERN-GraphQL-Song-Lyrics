import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SongList = () => {
	const { loading, error, data } = useQuery(query);

	const renderSongs = () => {
		return data.songs.map(song => {
			return (
				<li key={song.id} className="collection-item">
					{song.title}
				</li>
			);
		});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
	{
		songs {
			id
			title
		}
	}
`;

export default SongList;
