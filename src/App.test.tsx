import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the initial components', () => {
    render(<App />);

    // Check if the main elements are in the document
    expect(screen.getByText('Habit Tracker')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter habit name')).toBeInTheDocument();
    expect(screen.getByText('Add Habit')).toBeInTheDocument();
    expect(screen.getByText('Completion Rate: 0%')).toBeInTheDocument();
  });

  it('adds a new habit and updates the progress summary', () => {
    render(<App />);

    // Add a new habit
    fireEvent.change(screen.getByPlaceholderText('Enter habit name'), {
      target: { value: 'Exercise' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'daily' },
    });
    fireEvent.click(screen.getByText('Add Habit'));

    // Check if the new habit is displayed
    expect(screen.getByText('Exercise')).toBeInTheDocument();
    expect(screen.getByText('Completion Rate: 0%')).toBeInTheDocument(); // Completion rate remains 0%
  });
});
