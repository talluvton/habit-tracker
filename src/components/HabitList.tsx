import React from 'react';
import { Habit } from '../types/Habit.types';

type HabitListProps = {
    habits: Habit[];
    toggleComplete: (id: number) => void;
  };
  
const HabitList: React.FC<HabitListProps> = ({ habits, toggleComplete }) => {
    return (
        <div>
        {habits.map((habit) => (
            <div key={habit.id}>
            <h3>{habit.name}</h3>
            <p>Frequency: {habit.frequency}</p>
            <button onClick={() => toggleComplete(habit.id)}>
                {habit.isComplete ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            </div>
        ))}
        </div>
    );
};

export default HabitList;
