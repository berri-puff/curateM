import { useState, useEffect } from "react";
import { getsRandomUKArtworks, getsUkWorkbyfilters } from "../../../utils/api";
import { Link } from "react-router-dom";
import Error from "../error-page";
import { FaTag } from "react-icons/fa";


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
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter).then(
        (results) => {
          setUkArtworks((currentWorks) => {
            return [...currentWorks, ...results];
          });
          setPageCount((currentPage) => currentPage + 1);
        }
      );
    } else {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter).then(
        (results) => {
          setUkArtworks((currentWorks) => {
            return [...currentWorks, ...results];
          });
          setPageCount((currentPage) => currentPage + 1);
        }
      );
    }
  }
  console.log(ukArtworks)

  const handleCategory = (event) => {
    setCategoryFilter(event.target.value);
    setPageCount(1);
  };

  const handleLocation = (event) => {
    setLocationFilter(event.target.value);
    setPageCount(1);
  };

  const queryUkArtByFilter = (event) => {
    event.preventDefault();
    setInitialLoad(true);
    let pageInStr = pageCount.toString();
    if (!locationFilter) {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter)
        .then((results) => {
          setPageCount((currentPage) => currentPage + 1);
          setInitialLoad(false);
          setUkArtworks(results);
        })
        .catch((error) => {
          setInitialLoad(false);
          setError(error.response);
        });
    } else if (!categoryFilter) {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter)
        .then((results) => {
          setPageCount((currentPage) => currentPage + 1);
          setInitialLoad(false);
          setUkArtworks(results);
        })
        .catch((error) => {
          setInitialLoad(false);
          setError(error.response);
        });
    } else {
      getsUkWorkbyfilters(pageInStr, categoryFilter, locationFilter)
        .then((results) => {
          setPageCount((currentPage) => currentPage + 1);
          setInitialLoad(false);
          setUkArtworks(results);
        })
        .catch((error) => {
          setInitialLoad(false);
          setError(error.response);
        });
    }
  };

  if (initialLoading) {
    return (
      <article>
        <h1 id="page-title"className="level-center">UK Artworks</h1>
        <progress class="progress is-small is-primary" max="5">
          5%
        </progress>
      </article>
    );
  } else if (error && ukArtworks.length === 0) {
    return (
      <Error
        status={null}
        msg={
          error.detail
            ? Array.isArray(error.detail)
              ? error.detail[0].msg
              : error.detail
            : null
        }
      />
    );
  } else {
    return (
      <article>
        <h1 id="page-title">UK Artworks</h1>
        <form id="filter"onSubmit={queryUkArtByFilter}>
          <div className="select is-rounded is-primary mr-3">
  <select id="filter-btns"  onChange={handleCategory} defaultValue={categoryFilter} >
            <option value="">Category</option>
            <option value={"THES48903"}>Prints</option>
            <option value={"THES48885"}>Textiles</option>
            <option value={"THES48910"}>Photography</option>
            <option value={"THES48982"}>Ceramics</option>
            <option value={"THES48966"}>Drawings</option>
            <option value={"THES48917"}>Paintings</option>
            <option value={"THES48975"}>Clothing</option>
          </select>

          </div>
          <div  className="select is-rounded is-primary mr-3">
          <select id="filter-btns" onChange={handleLocation} defaultValue={locationFilter}>
            <option value="">Place of Origin</option>
            <option value={"x32019"}>Great Britain</option>
            <option value={"x28849"}>France</option>
            <option value={"x29399"}>Japan</option>
            <option value={"x29398"}>China</option>
            <option value={"x28927"}>Italy</option>
          </select>
          </div>
          <button id="curate-btn"className="button is-normal is-rounded is-light is-primary">Curate!</button>
        </form>
  <section id="art-container">
     {ukArtworks.map((artwork) => {
    
          return (
            <section className="card">
              <Link to={`/uk/${artwork.systemNumber}`} key={artwork.systemNumber}>
    <header id="art-title" className="card-header center">
                  {artwork["_primaryTitle"] ?  <p className="card-header-title">{artwork["_primaryTitle"]}</p> : <p className="card-header-title">Untitled</p>}  
            </header>

            <div className="card-image">
        <img height={"auto"} width={130}
                    src={
                      artwork["_images"]["_primary_thumbnail"]
                        ? artwork["_images"]["_primary_thumbnail"]
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
                    }
                  ></img>    
            </div> 
        
                    <div className="card-content">
                    {artwork["_primaryMaker"].length? <p>By: {artwork["_primaryMaker"]["name"]}</p> : <p>By: Unknown</p>} 
                <p>Current Location: {artwork["_currentLocation"].displayName}</p>
                    </div>
              
               
               
               
              
              <footer className="card-footer"> 
                <p className="card-footer-item">© Victoria and Albert Museum, London</p>
 <p className="card-footer-item"><FaTag /> Category : {artwork.objectType}</p>
              </footer>
            </Link>
           </section>
          );
        })}
  </section>
   

        <button 
        className="button is-medium is-rounded is-light is-link"
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
