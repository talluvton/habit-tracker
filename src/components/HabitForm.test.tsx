import { render, screen, fireEvent } from '@testing-library/react';
import HabitForm from './HabitForm';


describe('HabitForm', () => {
  it('adds a new habit', () => {
    const addHabit = jest.fn();
    render(<HabitForm addHabit={addHabit} />);

    fireEvent.change(screen.getByPlaceholderText('Enter habit name'), {
      target: { value: 'Exercise' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'daily' },
    });
    fireEvent.click(screen.getByText('Add Habit'));

    expect(addHabit).toHaveBeenCalledWith({
      id: expect.any(Number), // Check that an ID is generated
      name: 'Exercise',
      frequency: 'daily',
      isComplete: false,
    });
  });
});
