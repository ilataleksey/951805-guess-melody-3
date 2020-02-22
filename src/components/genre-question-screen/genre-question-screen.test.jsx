import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';
import question from './genre-question-screen.test.mocks.js';

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={question}
      onAnswer={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
