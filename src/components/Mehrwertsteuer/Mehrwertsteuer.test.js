import React from "react";
import { shallow } from "enzyme";
import Mehrwertsteuer from "./Mehrwertsteuer";

describe("Mehrwertsteuer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mehrwertsteuer />);
    expect(wrapper).toMatchSnapshot();
  });
});
