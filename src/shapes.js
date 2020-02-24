import PropTypes from "prop-types";
import {GameType} from "./const.js";

const genreAnswerShape = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}).isRequired;

const artistAnswerShape = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}).isRequired;

const songShape = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}).isRequired;

const questionsShape = PropTypes.oneOfType([
  PropTypes.shape({
    answers: PropTypes.arrayOf(genreAnswerShape),
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  PropTypes.shape({
    answers: PropTypes.arrayOf(artistAnswerShape),
    song: songShape,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
]);

export {questionsShape, genreAnswerShape, artistAnswerShape, songShape};
