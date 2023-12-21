import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface CounterStateZustand {
  value: number
  title: string
  increment: () => void
  decrement: () => void
  fetchToDo: () => Promise<void>
  incrementByAmount: (amount: number) => void
}

export const useCounterZustand = create<CounterStateZustand>()(
  devtools((set) => ({
    value: 0,
    title: '',
    fetchToDo: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      set({ title: data.title }, false, 'fetchToDo')
    },
    increment: () => set((state) => ({ value: state.value + 1 }), false, 'increment'),
    decrement: () => set((state) => ({ value: state.value - 1 }), false, 'decrement'),
    incrementByAmount: (amount: number) =>
      set((state) => ({ value: state.value + amount }), false, 'incrementByAmount'),
  }))
)
