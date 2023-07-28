import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SingleWeaponView.module.css"
import NavBar from "../NavBar"
import { useParams } from "react-router-dom"

function SingleWeaponPage () {
    
    const params = useParams()
    const [ skin, setSkin ] = useState(null)

    useEffect(() => {
        getSkin(params.weaponId)
    }, [params])

    async function getSkin (id) {
        const skin = await fetch(`https://valorant-api.com/v1/weapons/skins`)
        const skinData = await skin.json()
        const foundSkin = skinData.data.find(skinObj => skinObj.uuid === id)
        setSkin(foundSkin)
    }

    return (
        <div>
            <NavBar />
            <div>
                {skin
                ?   <p>{skin.displayName}</p>
                :   <p>Could not find the skin you are looking for.</p>
                }
            </div>
        </div>
    )
}

export default SingleWeaponPage