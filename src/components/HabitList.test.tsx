import { render, screen, fireEvent } from '@testing-library/react';
import HabitList from './HabitList';
import { Habit } from '../types/Habit.types';

describe('HabitList', () => {
  const habits: Habit[] = [
    { id: 1, name: 'Exercise', frequency: 'daily', isComplete: false },
    { id: 2, name: 'Read', frequency: 'weekly', isComplete: true },
  ];

  it('renders habits correctly', () => {
    render(<HabitList habits={habits} toggleComplete={() => {}} />);

    expect(screen.getByText('Exercise')).toBeInTheDocument();
    expect(screen.getByText('Read')).toBeInTheDocument();
  });

  it('toggles completion status', () => {
    const toggleComplete = jest.fn();
    render(<HabitList habits={habits} toggleComplete={toggleComplete} />);

    fireEvent.click(screen.getByText('Mark Complete'));
    expect(toggleComplete).toHaveBeenCalledWith(1); // ID of the first habit
  });
});
