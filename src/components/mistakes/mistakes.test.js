import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes.jsx";

describe(`Should Mistakes render correctly`, () => {
  it(`With zero mistakes`, () => {
    const tree = renderer
      .create(<Mistakes
        count={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one mistake`, () => {
    const tree = renderer
      .create(<Mistakes
        count={1}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
