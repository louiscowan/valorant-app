import { Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from './Home'
import Skins from './valorantSkins/Skins'

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maps" element={<Home />} />
        <Route path="/Agents" element={<Home />} />
        <Route path="/Skins" element={<Skins />} />
      </Routes>
    </main>
  )
}

export default App