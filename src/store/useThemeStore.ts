import { create } from 'zustand'

interface ThemeState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}))
  