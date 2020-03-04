import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {questions} from "../../mocks/mocks-test.js";

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
        questions={questions}
        onUserAnswer={() => {}}
        onWelcomeButtonClick={() => {}}
        step={-1}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
        questions={questions}
        onUserAnswer={() => {}}
        onWelcomeButtonClick={() => {}}
        step={0}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
        questions={questions}
        onUserAnswer={() => {}}
        onWelcomeButtonClick={() => {}}
        step={1}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
