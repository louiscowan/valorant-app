import { useEffect, useState } from "react"
import styles from "../../styles/valorantSkins/SkinDisplay.module.css"

function SkinDisplay (props) {
    const skin = props.skin
    console.log(skin)

    const [isNotStandardSkin, setIsnotStandardSkin ] = useState(true)

    useEffect(() => {
        let skinName = skin.displayName

        if(skinName.toLowerCase().includes("standard") || skin.displayIcon === null) {
            setIsnotStandardSkin(false)
        }
    },[skin])
    

    return (
        <>
            {isNotStandardSkin 
            ? <div className={styles.skinDiv}>
                    <h2>
                        {skin.displayName}
                    </h2>
                    <img src={skin.displayIcon} alt="Image Unavailable" className={styles.skinImage} />
                </div>  
            : null
            }
        </>
    )
} 

export default SkinDisplay
