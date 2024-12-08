import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

import { Menu } from './components/Menu.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Menu />
        {/*
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<Profile />} />
          <Route path="*" element={() => <Navigate to="/" replace />} />
        </Routes>
        */}
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
