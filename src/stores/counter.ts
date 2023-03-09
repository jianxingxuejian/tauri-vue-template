import { defineStore } from 'pinia'

interface CounterState {
  count: number
}

export const useCounterStore = defineStore('counter-store', {
  state: (): CounterState => ({
    count: 0,
  }),
})
