import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SongList = () => {
	const { loading, error, data } = useQuery(query);

	const renderSongs = () => {
		return data.songs.map(song => {
			return <li>{song.title}</li>;
		});
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return <div>{renderSongs()}</div>;
};

const query = gql`
	{
		songs {
			title
		}
	}
`;

export default SongList;
