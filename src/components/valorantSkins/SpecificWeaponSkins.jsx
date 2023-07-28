import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SpecificGunWeaponSkins.module.css"
import NavBar from "../NavBar"
import Weapons from "./Weapons"
import SkinDisplay from "./SkinDisplay"

function SpecificGunWeaponSkins () {
    const [ weapons, setWeapons ] = useState([])
    const [ singleWeaponSkins, setSingleWeaponSkins ] = useState([])
    const params = useParams()

    useEffect(() => {
        getWeapons()
    },[params])

    useEffect(() => {
        findParamsSkin(weapons)
    }, [weapons])

    function findParamsSkin (gun) {
        for(let i = 0; i < weapons.length; i++) {
            if(weapons[i].displayName === params.weaponName) {
                setSingleWeaponSkins(gun[i].skins)
            }
        }
    }
    
    async function getWeapons () {
        const weapons = await fetch("https://valorant-api.com/v1/weapons")
        const weaponsData = await weapons.json()
        setWeapons(weaponsData.data)
    }

    return (
        <div>
            <NavBar />
            <div className={styles.page}>
                {weapons ?
                    <div className={styles.valorantWeapons}>
                        {weapons.map((weapon) => (
                        <Weapons key={weapon.uuid} weapon={weapon} />
                        ))}
                    </div>
                : null
                }
                {singleWeaponSkins ?
                    <div className={styles.skinDisplayDiv}>
                        {singleWeaponSkins.map((weapon) => (
                            <SkinDisplay key={weapon.uuid} skin={weapon}/>
                        ))}
                    </div>
                : <h1>Could not find any skins</h1>}
            </div>
        </div>
    )
}

export default SpecificGunWeaponSkins