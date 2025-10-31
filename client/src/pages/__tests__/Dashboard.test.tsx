import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Dashboard Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('displays username when user is logged in', () => {
    const user = { username: 'testuser', id: '1' };
    localStorage.setItem('user', JSON.stringify(user));

    renderWithRouter(<Dashboard />);
    expect(screen.getByText(/Hi, testuser!/i)).toBeInTheDocument();
  });

  test('renders logout button', () => {
    const user = { username: 'testuser', id: '1' };
    localStorage.setItem('user', JSON.stringify(user));

    renderWithRouter(<Dashboard />);
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  test('shows welcome message', () => {
    const user = { username: 'testuser', id: '1' };
    localStorage.setItem('user', JSON.stringify(user));

    renderWithRouter(<Dashboard />);
    expect(screen.getByText(/Welcome to your dashboard/i)).toBeInTheDocument();
  });
});
