import { useEffect, useState } from "react"
import styles from "../../styles/ValorantSkins/SkinDisplay.module.css"

function SkinDisplay (props) {
    const [isNotStandardSkin, setIsnotStandardSkin ] = useState(true)
    const skin = props.skin
    console.log(skin)
    useEffect(() => {
        let skinName = skin.displayName
        if(skinName.toLowerCase().includes("standard")) {
            setIsnotStandardSkin(false)
        }
    },[skin])
    

    return (
        <>
            {isNotStandardSkin 
            ? <div>
                    <p>
                        {skin.displayName}
                    </p>
                    <img src={skin.displayIcon} alt="Image Unavailable" />
                </div>  
            : null
            }
        </>
    )
} 

export default SkinDisplay
