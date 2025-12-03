import { create } from 'zustand'

interface ThemeState {
  theme: 'dark' | 'light'
  setTheme: (theme: 'dark' | 'light') => void
  toggleTheme: () => void
  initializeTheme: () => void
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

// 시스템 다크모드 감지
const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
  initializeTheme: () => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const theme = savedTheme || getSystemTheme()
    set({ theme })
  },
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}))
