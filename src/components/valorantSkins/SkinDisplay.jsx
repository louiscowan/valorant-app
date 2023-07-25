import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SkinDisplay.module.css"

function SkinDisplay (props) {
    const skin = props.skin

    const [isNotStandardSkin, setIsnotStandardSkin ] = useState(true)

    useEffect(() => {
        let skinName = skin.displayName

        if(skinName.toLowerCase().includes("standard") || skin.displayIcon === null || skinName.toLowerCase() === "random favorite skin") {
            setIsnotStandardSkin(false)
        }
    },[skin])
    

    return (
        <>
            {isNotStandardSkin 
            ?   <div className={styles.skinDiv}>
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
