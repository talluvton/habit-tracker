import React, { useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import ProgressSummary from './components/ProgressSummary';
import { Habit } from './types/Habit.types';
import './App.css';

const App: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habit: Habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const toggleComplete = (id: number) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, isComplete: !habit.isComplete } : habit
      )
    );
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <ProgressSummary habits={habits} />
      <HabitList habits={habits} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
