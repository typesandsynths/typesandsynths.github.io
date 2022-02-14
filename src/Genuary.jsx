import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkMode } from './components/DarkMode'
import { AppBar } from './components/AppBar'
import { List } from './views/List'
import { Sketch } from './views/Sketch'
import './styles.css'

const Genuary = () => (
  <DarkMode>
    <BrowserRouter>
      <div className='flex flex-col h-screen max-h-screen'>
        <AppBar />
        <div className='grow'>
          <Routes>
            <Route path='/' element={<List />} />
            <Route path='/sketch/:sketch' element={<Sketch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </DarkMode>
)

render(
  <StrictMode>
    <Genuary />
  </StrictMode>,
  document.querySelector('#root')
)

// if (module.hot) module.hot.accept()

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const sw = new URL('service-worker.js', import.meta.url)
  window.addEventListener('load', () =>
    navigator.serviceWorker.register(sw, { type: 'module' })
  )
}
