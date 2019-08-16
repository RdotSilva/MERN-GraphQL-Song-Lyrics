import { gql } from "apollo-boost";

const LIKE_LYRIC = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default LIKE_LYRIC;
