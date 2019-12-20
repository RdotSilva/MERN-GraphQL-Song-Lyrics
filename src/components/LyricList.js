import React from "react";

import { useMutation } from "@apollo/react-hooks";

import LIKE_LYRIC from "../queries/likeLyric";

const LyricList = props => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const { lyrics } = props;

  const onLike = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    });
  };

  const renderLyrics = () => {
    return lyrics.map(lyric => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => onLike(lyric.id, lyric.likes)}
              style={likeButtonStyle}
            >
              thumb_up
            </i>
            {lyric.likes}
          </div>
        </li>
      );
    });
  };
  return (
    <div>
      <ul className="collection">{renderLyrics()}</ul>
    </div>
  );
};

const likeButtonStyle = {
  color: "#f37e21"
};

export default LyricList;
