import React from "react";
//import { shallow } from "enzyme";
import BootstrapFooter from "./BootstrapFooter";

import { render, screen } from '@testing-library/react';

describe("BootstrapFooter", () => {

  test('renders About Us links', () => {
    render(<BootstrapFooter />);
    const linkElement = screen.getByText('About Us');
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders Contact Us links', () => {
    render(<BootstrapFooter />);
    const linkElement = screen.getByText('Contact Us');
    expect(linkElement).toBeInTheDocument();
  });

});
