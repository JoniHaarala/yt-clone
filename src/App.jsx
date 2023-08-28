import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Channel, Feed, SearchFeed, NavBar, VideoDetail } from './components'

function App() {

  return (
    <BrowserRouter>
      <div className="bg-zinc-800">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/search/:search" exact element={<SearchFeed />} />
          <Route path="/watch/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/about" element={<h1>about</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
