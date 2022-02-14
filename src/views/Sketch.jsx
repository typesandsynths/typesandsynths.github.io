import { useParams } from 'react-router-dom'
import { Warp } from '../sketches/Warp'

export const SKETCHES = { warp: <Warp /> }

export const Sketch = () => {
  const { sketch } = useParams()

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {SKETCHES[sketch]}
    </div>
  )
}
