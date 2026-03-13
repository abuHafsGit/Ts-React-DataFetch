import React, { Suspense } from 'react'
import Home from './componets/Home'

function App() {
  return (
    <div>
      <Suspense fallback={<p>loding</p>}>
        <Home />
      </Suspense>
    </div>
  )
}

export default App
