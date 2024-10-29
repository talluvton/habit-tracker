import React from 'react';
import { Habit } from '../types/Habit.types';

type ProgressSummaryProps = {
  habits: Habit[];
};

const ProgressSummary: React.FC<ProgressSummaryProps> = ({ habits }) => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.isComplete).length;
  const completionRate = totalHabits ? Math.round((completedHabits / totalHabits) * 100) : 0;

  return (
    <div>
      <h2>Completion Rate: {completionRate}%</h2>
      <p>{completedHabits} out of {totalHabits} habits completed</p>
    </div>
  );
};

export default ProgressSummary;
