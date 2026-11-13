import { data, COUNTER_ID } from './data';

export function useGoal(value: keyof typeof data) {
  function execute() {
    if(import.meta.env.PROD && process.client) {
      if(typeof window.ym !== 'undefined') {
        ym(COUNTER_ID, 'reachGoal', value);
      }
    }
  }

  return {
    execute,
  }
}
