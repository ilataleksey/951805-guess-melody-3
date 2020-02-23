import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';
import song from './audio-player.test.mocks.jsx';

it(`AudioPlayer is rendered correctly`, () => {

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    src={song.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
