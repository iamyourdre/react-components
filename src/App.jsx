import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Index from './pages/Index/Index'
import Preview from './pages/Preview/Preview'
import Master from './pages/Components/Master'
import FileInput1 from './pages/Components/FileInput/FileInput1'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/preview/:name" element={<Preview/>} />
        <Route path="/components/" element={<Master/>}>
          <Route path="/components/fileinput/1" element={<FileInput1/>} />
        </Route>
        {/* 404 page */}
        <Route path="*" element={<Index/>} />
      </Routes>
    </>
  )
}

export default App
