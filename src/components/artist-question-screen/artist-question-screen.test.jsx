import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import question from './artist-question-screen.test.mocks.js';

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
