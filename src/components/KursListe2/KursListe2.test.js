import React from "react";
import { shallow } from "enzyme";
import KursListe2 from "./KursListe2";

describe("KursListe2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KursListe2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
