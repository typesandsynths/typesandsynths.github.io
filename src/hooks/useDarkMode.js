import { useContext } from 'react'
import { ThemeContext } from '../components/DarkMode'

export const useDarkMode = () => useContext(ThemeContext)
