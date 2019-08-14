import { gql } from "apollo-boost";

const DELETE_SONG = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default DELETE_SONG;
