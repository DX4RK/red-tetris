import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './routes/home'
import { Menu } from './routes/menu'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
