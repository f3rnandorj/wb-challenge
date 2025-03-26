import { Storage } from "../storage";

export const localStorageImplementation: Storage = {
  getItem: async (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  setItem: async (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    window.localStorage.removeItem(key);
  },
};
