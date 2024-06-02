import { create } from 'zustand'

type State = {
    count: number
  }
  
  type Action = {
    increasePopulation: () => void
    removeAll: () => void
  }
  
export const useStore = create<State & Action>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  removeAll: () => set({ count: 0 }),
}))