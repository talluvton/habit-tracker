import React, { useState } from 'react';
import { Habit } from '../types/Habit.types';

type HabitFormProps = {
    addHabit: (habit: Habit) => void;
  };
  
const HabitForm: React.FC<HabitFormProps> = ({ addHabit }) => {
const [name, setName] = useState('');
const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('daily');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHabit: Habit = {
    id: Date.now(),
    name,
    frequency,
    isComplete: false, // Start as incomplete
    };
    addHabit(newHabit);
    setName('');
};

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter habit name"
            required
        />
        <select value={frequency} onChange={(e) => setFrequency(e.target.value as Habit['frequency'])}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
        </select>
        <button type="submit">Add Habit</button>
        </form>
    );
};

export default HabitForm;
