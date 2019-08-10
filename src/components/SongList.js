import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SongList = () => {
	const { loading, error, data } = useQuery(query);
	console.log(data);
	return <div>Song List</div>;
};

const query = gql`
	{
		songs {
			title
		}
	}
`;

export default SongList;
