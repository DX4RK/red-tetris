import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SocketProvider } from '@/context/SocketContext'

import { Home } from './routes/home'
import { Menu } from './routes/menu'

function App() {
  return (
    <SocketProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    </SocketProvider>
  )
}
export default App
