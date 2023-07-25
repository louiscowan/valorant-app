import styles from "../../styles/valorantSkins/Weapons.module.css"

function Weapons (props) {
    const weapon = props.weapon


    return (
        <div className={styles.weaponNameDiv}>
            <h2>
                {weapon.displayName}
            </h2>
        </div>
    )
}

export default Weapons