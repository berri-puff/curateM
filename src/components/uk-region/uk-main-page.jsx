import { useState, useEffect } from "react";
import { getsRandomUKArtworks, getsUkWorkbyfilters } from "../../../utils/api";
import { Link } from "react-router-dom";

const UKRegion = () => {
  const [ukArtworks, setUkArtworks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [initialLoading, setInitialLoad] = useState([false]);
  const [error, setError] = useState([null]);
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    setInitialLoad(true);
    let pageInStr = pageCount.toString();
    getsRandomUKArtworks(pageInStr)
      .then((results) => {
        setUkArtworks(results);
        setInitialLoad(false);
      })
      .catch((error) => {
        setInitialLoad(false);
        setError(error.response.data);
        setInitialLoad(false);
      });
  }, []);

  function handleMoreBtn() {
    let pageInStr = pageCount.toString();
    if (!categoryFilter && !locationFilter) {
    
      getsRandomUKArtworks(pageInStr).then((results) => {
        setUkArtworks((currentWorks) => {
          return [...currentWorks, ...results];
        });
      });
    } else if (!locationFilter) {
      
      getsUkWorkbyfilters(pageInStr, categoryFilter).then((results) => {
        setUkArtworks((currentWorks) => {
          return [...currentWorks, ...results];
        });
        setPageCount((currentPage) => currentPage + 1);
      });
    } else {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter).then((results) => {
        setUkArtworks((currentWorks) => {
          return [...currentWorks, ...results];
        });
        setPageCount((currentPage) => currentPage + 1);
      });
    }
  }

  const handleCategory = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleLocation = (event) => {
    setLocationFilter(event.target.value);
  };

  const queryUkArtByFilter = (event) => {
    event.preventDefault();
    setInitialLoad(true);
    let pageInStr = pageCount.toString();

    if (!locationFilter) {
      getsUkWorkbyfilters(pageInStr, categoryFilter)
        .then((results) => {
          setPageCount((currentPage) => currentPage + 1);
          setInitialLoad(false);
          setUkArtworks(results);
        })
        .catch((error) => {
          setInitialLoad(false);
          setError(error);
        });
    }
    else {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter)
      .then((results) => {
        setPageCount((currentPage) => currentPage + 1);
        setInitialLoad(false);
        setUkArtworks(results);
      })
      .catch((error) => {
        setInitialLoad(false);
        setError(error);
      });
    }
    
  };

  if (initialLoading) {
    return (
      <article>
        <h1>
          this page will contain all the uk artworks only, calling on the V&A
          api so far, to add Fitzwilliam later on
        </h1>
        <h2>
          When clicking on the image, takes to the single arts page, css when
          hovered over, display some of the core infromation
        </h2>
        <h3>Loading</h3>
      </article>
    );
  } else if (error && ukArtworks.length === 0) {
    return <h1>ERROR </h1>;
  } else {
    return (
      <article>
        <h1>
          this page will contain all the uk artworks only, calling on the V&A
          api so far, to add Fitzwilliam later on
        </h1>
        <h2>
          When clicking on the image, takes to the single arts page, css when
          hovered over, display some of the core infromation
        </h2>
        <form onSubmit={queryUkArtByFilter}>
          <select onChange={handleCategory}>
            <option value="" selected disabled hidden>
              Category
            </option>
            <option value={"THES48903"}>Prints</option>
            <option value={"THES48885"}>Textiles</option>
            <option value={"THES48910"}>Photography</option>
            <option value={"THES48982"}>Ceramics</option>
            <option value={"THES48966"}>Drawings</option>
            <option value={"THES48917"}>Paintings</option>
            <option value={"THES48975"}>Clothing</option>
          </select>

          <select onChange={handleLocation}>
            <option value="" selected disabled hidden>
              Place of Origin
            </option>
            <option value={"x32019"}>Great Britain</option>
            <option value={"x28849"}>France</option>
            <option value={"x29399"}>Japan</option>
            <option value={"x29398"}>China</option>
            <option value={"x28927"}>Italy</option>
          </select>
          <button>Curate!</button>
        </form>
        {ukArtworks.map((artwork) => {
          return (
            <Link to={`/uk/${artwork.systemNumber}`} key={artwork.systemNumber}>
              <ol>
                <p>{artwork["_primaryTitle"]}</p>
                <Link to={`/uk/${artwork.systemNumber}`}>
                  <img src={artwork["_images"]["_primary_thumbnail"]}></img>{" "}
                </Link>
                <li>Type: {artwork.objectType}</li>
                <p>By: {artwork["_primaryMaker"]["name"]}</p>
                <p>{artwork["_currentLocation"].displayName}</p>
              </ol>
            </Link>
          );
        })}

        <button
          aria-label="new batch button"
          onClick={() => {
            handleMoreBtn();
          }}
        >
          More Artwork
        </button>
      </article>
    );
  }
};

export default UKRegion;
