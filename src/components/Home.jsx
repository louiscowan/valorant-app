import styles from "../styles/Home.module.css"
import { useNavigate } from "react-router-dom"

function Home () {

    const navigate = useNavigate()

    return (
        <div className={styles.pagesDivContainer}>
            <div className={styles.pagesDiv} onClick={() => navigate('/Skins')}>
                <h1>Skins</h1>
            </div>
            <div className={styles.pagesDiv} onClick={() => navigate('/Maps')}>
                <h1>Maps</h1>
            </div>
            <div className={styles.pagesDiv} onClick={() => navigate('/Agents')}>
                <h1>Agents</h1>
            </div>
        </div>
    )
}

export default Home