import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Menu } from './components/menu/Menu.jsx';
import { Home } from './components/home/Home.jsx';
import { NotFound } from './components/not-found/NotFound.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
        <Route path="/" exact element={<Home/>} />
          {/*

          <Route path="/explore" element={<Explore />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<Profile />} />
          */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
