import { gql } from "apollo-boost";

const FETCH_SONG = gql`
	query SongQuery($id: ID!) {
		song(id: $id) {
			id
			title
			lyrics {
				id
				content
			}
		}
	}
`;

export default FETCH_SONG;
