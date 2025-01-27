import { Route, Routes } from 'react-router-dom'

import Home from './_root/pages/Home'
import RootLayout from './_root/RootLayout'
import About from './_root/pages/About'

function App() {
  return (
    <Routes>
      
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
