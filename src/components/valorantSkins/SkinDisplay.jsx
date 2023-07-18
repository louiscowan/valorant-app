import { useEffect } from "react"
import styles from "../../styles/ValorantSkins/SkinDisplay.module.css"

function SkinDisplay (props) {

    const skin = props.skin

    return (
        <div>
            <p>
                {skin.displayName}
            </p>
        </div>
    )
} 

export default SkinDisplay
