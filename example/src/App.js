import React from 'react'
import { useMyHook } from 'lightense-images'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App