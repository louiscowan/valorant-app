import { useNavigate } from "react-router-dom"
import styles from "../../styles/valorantSkins/Weapons.module.css"

function Weapons (props) {
    const weapon = props.weapon
    const navigate = useNavigate()

    return (
        <div className={styles.weaponNameDiv} onClick={() => navigate(`/specificWeaponSkin/${weapon.displayName}`)}>
            <h2>
                {weapon.displayName}
            </h2>
        </div>
    )
}

export default Weapons