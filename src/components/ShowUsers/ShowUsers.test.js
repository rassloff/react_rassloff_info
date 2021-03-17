import React from "react";
import { render, screen } from '@testing-library/react';
import ShowUsers from "./ShowUsers";

describe("ShowUsers", () => {

  test('renders Invoice', () => {
    render(<ShowUsers />);
    const linkElement = screen.getByText('Users');
    expect(linkElement).toBeInTheDocument();
  });
});
