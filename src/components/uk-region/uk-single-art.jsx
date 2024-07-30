import { useState, useEffect, useContext } from "react";
import Error from "../error-page";
import { useParams } from "react-router-dom";
import { ExhibitContext } from "../../context/exhibit-context";
import { getsUkArtworkById } from "../../../utils/api";
import { IoMdArrowDropdown } from "react-icons/io";

const UKSingleArt = () => {
  const [ukSingleArtwork, setUkSingleArtwork] = useState([]);
  const { setExhibit } = useContext(ExhibitContext);
  const [loadingState, setLoadingState] = useState([false]);
  const [error, setError] = useState([null]);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [exhibitLoad, setExhibitLoad] = useState(false);
  const [addBtnDisable, setAddBtnDisable] = useState(false);

  const { artId } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getsUkArtworkById(artId)
      .then((result) => {
        setLoadingState(false);
        setUkSingleArtwork(result);
      })
      .catch((error) => {
        setLoadingState(false);
        setError(error.response);
      });
  }, []);

  const addToExhibit = () => {
    setAddBtnDisable(true);
    setExhibitLoad(true);
    setExhibit((currentExhibit) => {
      if (Array.isArray(currentExhibit)) {
        setAddBtnDisable(false);
        setExhibitLoad(false);
        setFeedbackMsg("Artwork added to your list successfully!");
        return [...currentExhibit, ukSingleArtwork];
      } else if (!currentExhibit) {
        setAddBtnDisable(false);
        setExhibitLoad(false);
        setFeedbackMsg("Artwork added to your list successfully!");
        return [ukSingleArtwork];
      } else {
        setAddBtnDisable(false);
        setLoadingState(false);
        setFeedbackMsg("Artwork not added to the page :(");
      }
    });
  };

  if (loadingState) {
    return (
      <progress className="progress is-small is-primary" max="100">
        20%
      </progress>
    );
  } else if (ukSingleArtwork.length === 0 && error) {
    const msg = error.data && error.data.detail;
    return <Error status={error.status} msg={msg} />;
  } else
    return (
      <article>
        {ukSingleArtwork.titles.length != 0 ? (
          <h2 className="title is-4">{ukSingleArtwork.titles[0].title} </h2>
        ) : (
          <h2 className="title is-4">Untitled Artwork</h2>
        )}
             <p className="subtitle is-6">
            
              {ukSingleArtwork.artistMakerPerson.length != 0 ? (
                <span>
               
                  {ukSingleArtwork.artistMakerPerson[0].name["text"]}
                </span>
              ) : (
                <span> Unknown</span>
              )}
            </p>

        <p>{feedbackMsg != "" ? <p>{feedbackMsg}</p> : null}</p>
        <p>{exhibitLoad ? <p>adding to your exhibit</p> : null}</p>

        <section className="columns">
          <section className="column">
            {ukSingleArtwork.images.length != 0 ? (
              <img
                src={`https://framemark.vam.ac.uk/collections/${ukSingleArtwork.images[0]}/full/600,400/0/default.jpg`}
              ></img>
            ) : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019" />
            )}
            <p className="subtitle is-7">
              © Victoria and Albert Museum, London
            </p>
            <button
              className="button is-normal is-rounded is-dark is-primary mr-3"
              aria-label="add to exhibit"
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
                    <p className="dropdown-item">Victoria & Albert Museum</p>
                    <p className="dropdown-item">
                      BOX: {ukSingleArtwork.galleryLocations[0].box}
                    </p>
                    <p className="dropdown-item">
                      CASE: {ukSingleArtwork.galleryLocations[0].case}
                    </p>
                    <p className="dropdown-item">
                      SHELF: {ukSingleArtwork.galleryLocations[0].shelf}
                    </p>
                  </div>
                </div>
              </div>
          </section>

          <section className="column is-vcentered">
          
            <h2 className="title title-2">About: </h2> 
        
            {ukSingleArtwork.summaryDescription ? (
              <p>{ukSingleArtwork.summaryDescription}</p>
            ) : (
              <p> {ukSingleArtwork.briefDescription}</p>
            )}
           <h2 className="title title-2">History: </h2>
            {ukSingleArtwork.objectHistory != "" ? (
              <p> {ukSingleArtwork.objectHistory}</p>
            ) : (
              <p>Little to no history can be found for this artwork.</p>
            )}
            Made in
            {ukSingleArtwork.placesOfOrigin.length != 0 ? (
              <span> {ukSingleArtwork.placesOfOrigin[0].place["text"]}</span>
            ) : (
              <span> Unknown</span>
            )}
            <p>
              Estimated production date is 
              {ukSingleArtwork.productionDates.length != 0 ? (
                <span> {ukSingleArtwork.productionDates[0].date.text}</span>
              ) : <span> not known</span>}
            </p>
            <section className="column">
                 <p> 
               It was added to V&A collection in 
              {ukSingleArtwork.accessionYear ? <span> {ukSingleArtwork.accessionYear} </span> : <span> unknown date</span>}
            </p>
           
            </section>
          </section>
        </section>
      </article>
    );
};

export default UKSingleArt;
