import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SkinDisplay.module.css"
import { useNavigate } from "react-router-dom"

function SkinDisplay (props) {
    const skin = props.skin

    const [isNotStandardSkin, setIsnotStandardSkin ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        let skinName = skin.displayName
        
        if(skinName.toLowerCase().includes("standard") || skin.displayIcon === null || skinName.toLowerCase() === "random favorite skin") {
            setIsnotStandardSkin(false)
        }
    },[skin])
    
    console.log("skin", skin)
    return (
        <>
            {isNotStandardSkin 
            ?   <div className={styles.skinDiv} onClick={() => navigate(`/weaponSkinSingleView/:${skin.uuid}`)}>
                    <img src={skin.displayIcon} alt="Image Unavailable" className={styles.skinImage} />
                    <h2 className={styles.displayName}>
                        {skin.displayName}
                    </h2>
                </div>  
            : null
            }
        </>
    )
} 

export default SkinDisplay
