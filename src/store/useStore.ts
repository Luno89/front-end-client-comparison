import { create } from 'zustand'

export const useStore = create<{count:number, increaseCount:()=>void, resetCount:()=>void}>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1})),
    resetCount: () => set(() => ({ count: 0}))
}))