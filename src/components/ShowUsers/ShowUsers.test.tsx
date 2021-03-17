import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowUsers from './ShowUsers';

describe('<ShowUsers />', () => {
  test('it should mount', () => {
    render(<ShowUsers />);
    
    const showUsers = screen.getByTestId('ShowUsers');

    expect(showUsers).toBeInTheDocument();
  });
});