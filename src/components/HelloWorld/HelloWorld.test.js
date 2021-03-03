import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper).toMatchSnapshot();
  });
});
