import { useState, useEffect } from "react";
import { getsRandomUKArtworks } from "../../../utils/api";
import { Link } from "react-router-dom";

const UKRegion = () => {
  const [ukArtworks, setUkArtworks] = useState([]);
  const [artCategory, setArtCategory] = useState([]);
  const [initialLoading, setInitialLoad] = useState([false]);
  const [error, setError] = useState([null])
  useEffect(() => { 
    setInitialLoad(true)
    getsRandomUKArtworks().then((results) => {
      setUkArtworks(results);  
      setInitialLoad(false)
    })
    .catch((error)=>{
       setError(error.response) 
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

      {ukArtworks.map((artwork) => {
        return (
          <ol key ={artwork.systemNumber}>
            <p>{artwork["_primaryTitle"]}</p>
            <Link to={`/uk/${artwork.systemNumber}`}><img src={artwork["_images"]["_primary_thumbnail"]}></img> </Link>
            <li>Type: {artwork.objectType}</li>
            <p>By: {artwork["_primaryMaker"]["name"]}</p>
            <p>{artwork["_currentLocation"].displayName}</p>
          </ol>
        );
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
