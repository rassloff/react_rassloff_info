import React from "react";
//import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';
import KursListe2 from "./KursListe2";

describe("KursListe2", () => {
  /*
  test("matches snapshot", () => {
    const wrapper = shallow(<KursListe2 />);
    expect(wrapper).toMatchSnapshot();
  });
  */
  test('renders Invoice', () => {
    render(<KursListe2 />);
    const linkElement = screen.getByText('Invoice');
    expect(linkElement).toBeInTheDocument();
  });
});
