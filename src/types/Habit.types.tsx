export type Habit = {
    id: number;
    name: string;
    frequency: 'daily' | 'weekly' | 'monthly';
    isComplete: boolean; 
  };