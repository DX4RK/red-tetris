import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './routes/home'
import { Menu } from './routes/menu'
import { Game } from './routes/game'
import { Rooms } from './routes/rooms'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="/game" element={<Game />}/>
            <Route path="/rooms" element={<Rooms />}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App
