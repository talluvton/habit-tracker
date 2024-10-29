import { render, screen } from '@testing-library/react';
import ProgressSummary from './ProgressSummary';
import { Habit } from '../types/Habit.types';

describe('ProgressSummary', () => {
  it('calculates the completion rate', () => {
    const habits: Habit[] = [
      { id: 1, name: 'Exercise', frequency: 'daily', isComplete: false },
      { id: 2, name: 'Read', frequency: 'weekly', isComplete: true },
      { id: 3, name: 'Meditate', frequency: 'daily', isComplete: true },
    ];

    render(<ProgressSummary habits={habits} />);

    expect(screen.getByText('Completion Rate: 67%')).toBeInTheDocument();
    expect(screen.getByText('2 out of 3 habits completed')).toBeInTheDocument();
  });

  it('handles empty habit list', () => {
    render(<ProgressSummary habits={[]} />);

    expect(screen.getByText('Completion Rate: 0%')).toBeInTheDocument();
    expect(screen.getByText('0 out of 0 habits completed')).toBeInTheDocument();
  });
});
