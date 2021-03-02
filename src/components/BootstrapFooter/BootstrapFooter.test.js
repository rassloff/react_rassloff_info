import React from "react";
import { shallow } from "enzyme";
import BootstrapFooter from "./BootstrapFooter";

describe("BootstrapFooter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BootstrapFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
