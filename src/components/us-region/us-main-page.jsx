import { useEffect, useState } from "react";
import { getsUsWorkbyKeyword, getUsArtworks } from "../../../utils/api";
import { Link } from "react-router-dom";
import Error from "../error-page";
import { FaTag } from "react-icons/fa";
const USRegion = () => {
  const [usArtworks, setUsArtworks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(19);
  const [error, setError] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [disableSearchBtn, setDisableSearchBtn] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsArtworks()
      .then((results) => {
        setUsArtworks(results.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  }, []);

  const filteredArtworks = usArtworks.filter(
    (artwork, index) => index >= minimum && index <= maximum
  );
  const handleNextBatchBtn = () => {
    setMinimum((currentMin) => (currentMin += 20));
    setMaximum((currentMax) => (currentMax += 20));
  };

  const handlepreviousBatchBtn = () => {
    setMinimum((currentMin) => (currentMin -= 20));
    setMaximum((currentMax) => (currentMax -= 20));
  };

  const handleSearchQuery = (event) => {
    setSearchKeyword(event.target.value);
  };

  const queryUsArtworks = (event) => {
    setDisableSearchBtn(true);
    event.preventDefault();
    setLoading(true);
    getsUsWorkbyKeyword(searchKeyword)
      .then((results) => {
        setDisableSearchBtn(false);
        setLoading(false);
        setUsArtworks(results.data);
        setSearchKeyword("");
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  if (loading) {
    return (
      <article>
        <h1>US Artworks</h1>
        <progress className="progress is-small is-primary" max="100">
          20%
        </progress>
      </article>
    );
  } else if (error && usArtworks.length === 0) {
    const msg = error.response ? error.response.data.detail : null;
    const status = error.response ? error.response.status : null;
    return <Error status={status} msg={msg} />;
  } else {
    return (
      <article>
        <h1>US Artworks</h1>
        <form onSubmit={queryUsArtworks}>
          <label htmlFor="keyword Search">
            Search All US works
            <input
              className="input is-primary is-rounded w-150 "
              placeholder="keyword: teacups"
              onChange={handleSearchQuery}
              value={searchKeyword}
              resize={"none"}
              required
            />
          </label>

          <button
            aria-label="search"
            disabled={disableSearchBtn}
            className="button is-normal is-rounded is-light is-primary"
          >
            Curate!
          </button>
        </form>

        {filteredArtworks.map((artwork) => {
          const imageUrl = artwork?.alternate_images[0]?.print?.url;
          return (
            <section className="card">
              <Link key={artwork.id} to={`/us/${artwork.id}`}>
                <p className="card-header-title">{artwork.title}</p>
                <div className="card-image">
                  {imageUrl ? (
                    <img src={imageUrl} width={200} height="auto"></img>
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"
                      width={200}
                      height="auto"
                    />
                  )}
                </div>
              
 <section className="card-content">
                  By
                  {artwork.creators.length != 0 ? (
                    <span>{artwork.creators[0].description}</span>
                  ) : (
                    <span>Unknown</span>
                  )}
                  <p>Currently in {artwork.current_location}</p>
                </section>
                
         
               
                  <section className="card-footer">
                  <p className="card-footer-item">© The Cleveland Museum of Art</p>
                  <p className="card-footer-item"><FaTag /> {artwork.type}</p>
                  </section>
             
              </Link>
            </section>
          );
        })}

        <button
          aria-label="previous "
          onClick={() => {
            handlepreviousBatchBtn();
          }}
          disabled={minimum === 0 ? true : false}
          className="button is-medium is-rounded is-light is-link mr-3"
        >
          Previous
        </button>
        <button
          aria-label="Next "
          onClick={() => {
            handleNextBatchBtn();
          }}
          className="button is-medium is-rounded is-light is-link"
        >
          Next
        </button>
      </article>
    );
  }
};

export default USRegion;
