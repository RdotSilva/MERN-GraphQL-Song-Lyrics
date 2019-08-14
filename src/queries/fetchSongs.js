import { gql } from "apollo-boost";

const FETCH_SONGS = gql`
	query FetchSongs{
    {
		songs {
			id
			title
		}
	}
`;

export default FETCH_SONGS;
