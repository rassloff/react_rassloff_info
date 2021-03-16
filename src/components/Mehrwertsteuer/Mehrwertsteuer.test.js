//import React from "react";
//import { shallow } from "enzyme";
import Mehrwertsteuer from "./Mehrwertsteuer";

describe("Mehrwertsteuer", () => {
  test("matches snapshot", () => {
    //const wrapper = shallow(<Mehrwertsteuer />);
    //expect(wrapper).toMatchSnapshot();
    const mehrwertsteuer  = new Mehrwertsteuer();
    const steuer = 19;
    const value = 100;
    const result = mehrwertsteuer.steuerBerechnen(steuer, value);
    expect(result).toBe(19);
  });
});
