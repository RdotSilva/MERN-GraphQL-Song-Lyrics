import { gql } from "apollo-boost";

const FETCH_SONG = gql`
	query SongQuery($id: ID!) {
		song(id: $id) {
			id
			title
		}
	}
`;

export default FETCH_SONG;
