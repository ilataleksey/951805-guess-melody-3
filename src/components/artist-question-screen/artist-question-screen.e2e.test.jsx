import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from "./artist-question-screen.jsx";
import question from "./artist-question-screen.test.mocks.js";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `John Snow`,
    picture: `https://api.adorable.io/avatars/128/0`,
  };

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input.artist__input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
