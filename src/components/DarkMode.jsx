import { createContext, useLayoutEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const ThemeContext = createContext([true, () => {}])

export const DarkMode = ({ children }) => {
  const [dark, setDark] = useLocalStorage('dark', true)

  useLayoutEffect(() => {
    const html = document.querySelector('html')
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [dark])

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      {children}
    </ThemeContext.Provider>
  )
}
