import React from "react";
import { shallow } from "enzyme";
import KursListe from "./KursListe";

describe("KursListe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KursListe />);
    expect(wrapper).toMatchSnapshot();
  });
});
