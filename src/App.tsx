import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './routes/home'
import { InteractiveGridPatternDemo } from './routes/test'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/d" element={<InteractiveGridPatternDemo />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
