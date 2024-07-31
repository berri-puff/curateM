import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleUsWork } from "../../../utils/api";
import { ExhibitContext } from "../../context/exhibit-context";
import { splitTime } from "../../../utils/splitTime";
import Error from "../error-page";
import { IoMdArrowDropdown } from "react-icons/io";

const USSingleArt = () => {
  const [usSingleArtwork, setUsSingleArtwork] = useState([]);

  const { setExhibit } = useContext(ExhibitContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([null]);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [addBtnDisable, setAddBtnDisable] = useState(false);

  const { artId } = useParams();

  useEffect(() => {
    setLoading(true);
    getSingleUsWork(artId)
      .then((result) => {
        setLoading(false);
        setUsSingleArtwork(result.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response);
      });
  }, []);

  const addToExhibit = () => {
    setAddBtnDisable(true);
        setExhibit((currentExhibit) => {
      const alreadyInGallery = currentExhibit.some(item => item.id === usSingleArtwork.id);
      if (alreadyInGallery) {
        setFeedbackMsg('This artwork is already in your gallery!');
        return currentExhibit
      } 
      else if (Array.isArray(currentExhibit)) {
        setAddBtnDisable(false);
        
        setFeedbackMsg("Artwork added to your list successfully!");
        return [...currentExhibit, usSingleArtwork];
      } else if (!currentExhibit) {
        setAddBtnDisable(false);
        
        setFeedbackMsg("Artwork added to your list successfully!");
        return [usSingleArtwork];
      } else {
        setAddBtnDisable(false);
        setLoadingState(false);
        setFeedbackMsg("Artwork not added to the page :(");
      }
    });
  };

  if (loading) {
    return (
      <progress className="progress is-small is-primary" max="100">
        20%
      </progress>
    );
  } else if (error && usSingleArtwork.length === 0) {
    const msg = error.data && error.data.detail;
    return <Error status={error.status} msg={msg} />;
  }
  if (usSingleArtwork.length != 0 && loading === false) {
    return (
      <article>
        <h2 className="title is-4"> {usSingleArtwork.title}</h2>
        <p className="subtitle is-6">
          By: {usSingleArtwork.creators[0].description}
        </p>
        <p>{feedbackMsg != "" ? <p>{feedbackMsg}</p> : null}</p>
  
        <section className="columns">
          <section className="column">
            <img src={usSingleArtwork.images.web.url} />
            <p className="subtitle is-7">© The Cleveland Museum of Art</p>
            <button
              aria-label="add to exhibit"
              className="button is-normal is-rounded is-dark is-primary mr-3"
              onClick={() => {
                addToExhibit();
              }}
              disabled={addBtnDisable}
            >
              Add To My Exhibit
            </button>
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button
                    className="button is-normal is-link is-light is-rounded"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <p>Where to find it <IoMdArrowDropdown /></p>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <p className="dropdown-item">The Cleveland Museum of Art</p>
                    <p className="dropdown-item">
                     DEPARTMENT :  {usSingleArtwork.department} 
                    </p>
                    <p className="dropdown-item">
                   LOCATION:  {usSingleArtwork.current_location}
                    </p>
                   
                  </div>
                </div>
              </div>
          </section>
          <section className="column is-vcentered">
            <h2 className="title title-2">ABOUT:</h2>
            <p>{usSingleArtwork.description}</p>
            <h2 className="title title-2">History:</h2>
            <p>
              This piece of work was added to the collection in the year
              {splitTime(usSingleArtwork.accession_date)}, falls under the{" "}
              {usSingleArtwork.collection} collection
            </p>
            <p>
              Here's a little fun fact about {usSingleArtwork.title}!{" "}
              {usSingleArtwork.did_you_know}
            </p>
            <section className="column">
               <p>
              It is estimated to be made around {usSingleArtwork.creation_date}
            </p>

            </section>
           
            {/* <h3>Want to find it?</h3>
            <p>
              In the department of {usSingleArtwork.department} -{" "}
              {usSingleArtwork.current_location}
            </p> */}
          </section>
        </section>
      </article>
    );
  }
};

export default USSingleArt;
