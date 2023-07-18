import styles from "../../styles/valorantSkins/Skins.module.css"
import SkinDisplay from "./SkinDisplay"
import { useState, useEffect } from 'react';

async function getSkins() {
  const response = await fetch("https://valorant-api.com/v1/weapons/skins");
  const skinData = await response.json();
  return skinData.data;
}

function Skins() {
  const itemsPerPage = 25;
  const [skins, setSkins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSkinsByPage(currentPage);
  }, [currentPage]);

  async function fetchSkinsByPage (pageNumber) {
    const allSkins = await getSkins();
    const startIdx = (pageNumber - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const skinsForPage = allSkins.slice(startIdx, endIdx);
    setSkins(skinsForPage);
  }

  function handleNextPage () {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function handlePrevPage () {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <div>
      {skins.length > 0 ? (
        <div>
          {skins.map((skin) => (
            <SkinDisplay key={skin.uuid} skin={skin} />
          ))}
        </div>
      ) : (
        <div>No skins to display.</div>
      )}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Skins