import { Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import Home from './Home'
import Skins from './valorantSkins/Skins'
import SpecificWeaponSkins from './valorantSkins/SpecificWeaponSkin'
import SingleWeaponPage from './valorantSkins/SingleWeaponPage'

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maps" element={<Home />} />
        <Route path="/Agents" element={<Home />} />
        <Route path="/Skins" element={<Skins />} />
        <Route path="/specificWeaponSkin/:weaponName" element={<SpecificWeaponSkins />} />
        <Route path="/weaponSkinSingleView/:weaponId" element={<SingleWeaponPage />} />
      </Routes>
    </main>
  )
}

export default App