import styles from "../../styles/valorantSkins/Skins.module.css"
import NavBar from "../NavBar";
import SkinDisplay from "./SkinDisplay"
import { useState, useEffect } from 'react';
import Weapons from "./Weapons";


function Skins() {
  const itemsPerPage = 25;
  const [skins, setSkins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ weapons, setWeapons ] = useState([])
  
  useEffect(() => {
    fetchSkinsByPage(currentPage);
    getWeapons()
  }, [currentPage]);

  async function getSkins() {
    const response = await fetch("https://valorant-api.com/v1/weapons/skins");
    const skinData = await response.json()
    return skinData.data;
  }

  async function fetchSkinsByPage (pageNumber) {
    const allSkins = await getSkins();
    const startIdx = (pageNumber - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const skinsForPage = allSkins.slice(startIdx, endIdx);
    setSkins(skinsForPage);
  }

  async function getWeapons () {
    const weapons = await fetch("https://valorant-api.com/v1/weapons")
    const weaponsData = await weapons.json()
    setWeapons(weaponsData.data)
  }

  function scrollToTopOfPage () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  function handleNextPage () {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTopOfPage()
  }

  function handlePrevPage () {
    scrollToTopOfPage()
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <div>
      <NavBar />
      <div className={styles.page}>
        {weapons ?
          <div className={styles.valorantWeapons}>
            {weapons.map((weapon) => (
            <Weapons key={weapon.uuid} weapon={weapon} />
            ))}
          </div>
        : null
        }
        {skins.length > 0 ? (
      <div>
        <div className={styles.skinDisplayDiv}>
          {skins.map((skin) => (
            <SkinDisplay key={skin.uuid} skin={skin} />
          ))}
        </div>
          <div className={styles.pageButtonsDiv}>
            <button  className={styles.pageButton} onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <button className={styles.pageButton} onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
        ) : (
          <div>No skins to display.</div>
          )}
      </div>
    </div>
  );
}

export default Skins