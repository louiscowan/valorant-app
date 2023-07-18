import { Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from './Home'

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App