import { useState, useEffect } from "react";
import { getsRandomUKArtworks, getsUkWorkbyKeyword } from "../../../utils/api";
import { Link } from "react-router-dom";

const UKRegion = () => {
  const [ukArtworks, setUkArtworks] = useState([]);
  const [keywordSearch, setkeywordSearch] = useState([]);
  const [initialLoading, setInitialLoad] = useState([false]);
  const [error, setError] = useState([null])

  useEffect(() => { 
    setInitialLoad(true)
    getsRandomUKArtworks().then((results) => {
      setUkArtworks(results);  
      setInitialLoad(false)
   
    })
    .catch((error)=>{
      setInitialLoad(false)
       setError(error.response.data) 
       setInitialLoad(false)
        
    })
  }, []);

  function newBatch() {
    getsRandomUKArtworks().then((results) => {
      setUkArtworks((currentWorks) => {
        return [...currentWorks, ...results];
      });
    
    });
  }

  const handleSearchBar = (event) =>{
setkeywordSearch(event.target.value)

  }

const queryUkArtByKeyword = (event) => {
  event.preventDefault()
  setInitialLoad(true)

  getsUkWorkbyKeyword(keywordSearch).then((results) =>{

setInitialLoad(false)
setUkArtworks(results.records)
setkeywordSearch('')
  }).catch((error) =>{
    setInitialLoad(false)
    setError(error)
  })
}

console.log(ukArtworks[0])
  
 if (initialLoading) {
    return (
        <article>
        <h1>
          this page will contain all the uk artworks only, calling on the V&A api
          so far, to add Fitzwilliam later on
        </h1>
        <h2>
          When clicking on the image, takes to the single arts page, css when
          hovered over, display some of the core infromation
        </h2>
        <h3>Loading</h3>
      </article>
    );
  }
else if (error && ukArtworks.length === 0) {
  return <h1>ERROR </h1>
}
  else {
     return (
    <article>
      <h1>
        this page will contain all the uk artworks only, calling on the V&A api
        so far, to add Fitzwilliam later on
      </h1>
      <h2>
        When clicking on the image, takes to the single arts page, css when
        hovered over, display some of the core infromation
      </h2>
      <form onSubmit={queryUkArtByKeyword}>
        <label htmlFor="searchArtworks"> Search artworks:</label>
        <input
    type="text"
    id="searchArtworks"
    aria-placeholder="input keyword here"
    placeholder="ie: clays..."
    onChange={handleSearchBar}
    value={keywordSearch}
    required
  />
        <button>Curate!</button>
      </form>
      {ukArtworks.map((artwork) => {
        return ( <Link to={`/uk/${artwork.systemNumber}`} key ={artwork.systemNumber}>
          <ol >
            <p>{artwork["_primaryTitle"]}</p> 
            <Link to={`/uk/${artwork.systemNumber}`}><img src={artwork["_images"]["_primary_thumbnail"]}></img> </Link>
            <li>Type: {artwork.objectType}</li>
            <p>By: {artwork["_primaryMaker"]["name"]}</p>
            <p>{artwork["_currentLocation"].displayName}</p>
          </ol>
       </Link> );
      })}

      <button
        aria-label="new batch button"
        onClick={() => {
          newBatch();
        }}
      >
        New Batch
      </button>

    </article>
  );
  }
 
};

export default UKRegion;
