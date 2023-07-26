import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SingleWeaponView.module.css"
import NavBar from "../NavBar"
import { useParams } from "react-router-dom"

function SingleWeaponPage () {
    
    const params = useParams()

    const [ skin, setSkin ] = useState([])

    useEffect(() => {
        getSkin(params.weaponId)
    }, [params])

    async function getSkin (id) {
        const skin = await fetch(`https://valorant-api.com/v1/weapons/${params.weaponId}`)
        const skinData = await skin.json()
        // console.log(skinData.data)
        setSkin(skinData.data)
    }

    return (
        <div>
            <NavBar />
            <div>

            </div>
        </div>
    )
}

export default SingleWeaponPage