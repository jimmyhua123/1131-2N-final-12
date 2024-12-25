import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage_xx from './pages/HomePage_xx'
import BlogStaticPage_xx from './pages/BlogStaticPage_xx'
import BlogNodePage_xx from './pages/BlogNodePage_xx'
import BlogSupaPage_xx from './pages/BlogSupaPage_xx'
import BlogSupaPage2_xx from './pages/BlogSupaPage2_xx'

import MidP1Page_xx from './pages/mid_xx/P1Page_xx'
import MidP2Page_xx from './pages/mid_xx/P2Page_xx'
import MidP3Page_xx from './pages/mid_xx/P3Page_xx'
import MidP4Page_xx from './pages/mid_xx/P4Page_xx'

const App_xx = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/static_xx' element={<BlogStaticPage_xx />} />
        <Route path='/node_xx' element={<BlogNodePage_xx />} />
        <Route path='/supa_xx' element={<BlogSupaPage_xx />} />
        <Route path='/supa2_xx' element={<BlogSupaPage2_xx />} />
      </Routes>
      <Routes>
        <Route path='/mid_xx/p1_xx' element={<MidP1Page_xx />} />
        <Route path='/mid_xx/p2_xx' element={<MidP2Page_xx />} />
        <Route path='/mid_xx/p3_xx' element={<MidP3Page_xx />} />
        <Route path='/mid_xx/p4_xx' element={<MidP4Page_xx />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_xx
