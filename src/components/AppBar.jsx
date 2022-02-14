import { Link, useLocation } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useDarkMode } from '../hooks/useDarkMode'

export const AppBar = () => {
  const location = useLocation()
  const sketch = location.pathname.split('/').filter(p => p)[1]
  const [dark, setDark] = useDarkMode()
  const Icon = dark ? SunIcon : MoonIcon

  return (
    <div className='p-4 flex justify-between items-center bg-stone-300 dark:bg-stone-800'>
      <h1 className='text-xl font-bold'>
        🍃{' '}
        <Link to='/' className='decoration-amber-400 hover:underline'>
          TYPES &amp; SYNTHS
        </Link>
        {sketch && ` · ${sketch.toUpperCase()}`}
      </h1>
      <button
        onClick={() => setDark(dark => !dark)}
        className='px-2 py-1 text-xl rounded-full hover:bg-stone-500/50'
      >
        <Icon className='w-5 h-5' />
      </button>
    </div>
  )
}
