import { useState } from "react";
import styles from "../styles/NavBar.module.css"
import { useNavigate } from "react-router-dom";

function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate()

    function navbarRouteClicked (word) {
        if(word === "Logo") {
            navigate("/")
        }   else if (word === "Skins") {
            navigate("/Skins")
        }   else if (word === "Maps") {
            navigate("/Maps")
        }   else if (word === "Agents") {
            navigate("/Agents")
        }
    }

    function toggleMenu () {
      setIsMenuOpen(!isMenuOpen);
    }
  
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src="/path/to/your/image.png" alt="Logo" onClick={() => navbarRouteClicked("Logo")} />
          <div className={`${styles['routeWords']} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.navbarRouteWord} onClick={() => navbarRouteClicked("Skins")}>Skins</div>
            <div className={styles.navbarRouteWord} onClick={() => navbarRouteClicked("Maps")}>Maps</div>
            <div className={styles.navbarRouteWord} onClick={() => navbarRouteClicked("Agents")}>Agents</div>
          </div>
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </nav>
      )
    }

export default NavBar