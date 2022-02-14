import { Link } from 'react-router-dom'
import { SKETCHES } from './Sketch'

export const List = () => (
  <div className='w-full min-h-full p-2 md:p-8 flex justify-center'>
    <ul className='w-full md:w-1/2 lg:w-1/3 divide-y'>
      {Object.keys(SKETCHES).map((sketch, idx, { length }) => (
        <Link key={sketch} to={`/sketch/${sketch}`}>
          <li className='p-4 my-2 rounded-sm font-bold hover:bg-stone-200 dark:hover:bg-stone-800 hover:shadow border-b-stone-200 dark:border-b-stone-800'>
            🌱 {sketch.toUpperCase()}
          </li>
        </Link>
      ))}
    </ul>
  </div>
)
