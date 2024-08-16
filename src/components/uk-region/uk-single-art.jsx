import { useState, useEffect, useContext } from "react";
import Error from "../error-page";
import { useParams } from "react-router-dom";
import { ExhibitContext } from "../../context/exhibit-context";
import { getsUkArtworkById } from "../../../utils/api";
import { IoMdArrowDropdown } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';

const UKSingleArt = () => {
  const [ukSingleArtwork, setUkSingleArtwork] = useState([]);
  const { setExhibit } = useContext(ExhibitContext);
  const [loadingState, setLoadingState] = useState([false]);
  const [error, setError] = useState([null]);


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

    setExhibit((currentExhibit) => {
      const alreadyInGallery = currentExhibit.some(item => item.systemNumber === ukSingleArtwork.systemNumber);
      if (alreadyInGallery) {
        toast("This artwork is already in your gallery!", {
          icon: <PiPaintRollerFill />,
          duration: 4000,
             position: 'bottom-center'
        });
        setAddBtnDisable(false)
        return currentExhibit
      } 
      else if (Array.isArray(currentExhibit)) {
        setAddBtnDisable(false);
       
        toast.success("Artwork added to your list successfully!", {
          duration: 4000,
             position: 'bottom-center'
        });
        setAddBtnDisable(true)
        return [...currentExhibit, ukSingleArtwork];
        
      } else if (!currentExhibit) {
        setAddBtnDisable(false);
      
        toast.success("Artwork added to your list successfully!", {
          duration: 4000,
             position: 'bottom-center'
        });
        setAddBtnDisable(true)
        return [ukSingleArtwork];
      } else {
        setAddBtnDisable(false);
        setLoadingState(false);
        toast.error("Artwork not added to the page :(", {
          duration: 4000,
             position: 'bottom-center'
        });
      }
    });
  };

  if (loadingState) {
    return (
      <progress id="loading-bar" className="progress is-primary" max="5">
  
      </progress>
    );
  } else if (ukSingleArtwork.length === 0 && error) {
    const msg = error.data && error.data.detail;
    return <Error status={error.status} msg={msg} />;
  } else
    return (
      <article id="single-art">
        {ukSingleArtwork.titles.length != 0 ? (
          <h2 id="single-title" className="title is-2">{ukSingleArtwork.titles[0].title} </h2>
        ) : (
          <h2 id="single-title"className="title is-2">Untitled Artwork</h2>
        )}
             <p className="subtitle is-6">
            By: 
              {ukSingleArtwork.artistMakerPerson.length != 0 ? (
                <span>
               
                  {ukSingleArtwork.artistMakerPerson[0].name["text"]}
                </span>
              ) : (
                <span> Unknown</span>
              )}
            </p>

            <Toaster/> 
        <section className="columns">
          <section className="column">
            {ukSingleArtwork.images.length != 0 ? (
              <img
                src={`https://framemark.vam.ac.uk/collections/${ukSingleArtwork.images[0]}/full/full/0/default.jpg`}
              ></img>
            ) : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019" />
            )}
            <p className="subtitle is-7">
              © Victoria and Albert Museum, London
            </p>
            <button
            id="add-exhibit-btn"
              className="button is-normal is-rounded is-dark is-primary mr-3 mt-3"
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
                  id="curate-btn"
                    className="button is-normal is-primary is-light is-rounded mt-3"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <p>Where to find it < IoMdArrowDropdown /></p>
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

         
          <section className="column is-vcentered mb-5">
          <article className="p-2 mb-2">
             <h2 className="title title-2">About: </h2> 
        
            {ukSingleArtwork.summaryDescription ? (
              <p>{ukSingleArtwork.summaryDescription}</p>
            ) : (
              <p> {ukSingleArtwork.briefDescription}</p>
            )}
          </article>
           <article className="p-2 mb-2">
             <h2 className="title title-2">History: </h2>
            {ukSingleArtwork.objectHistory != "" ? (
              <p> {ukSingleArtwork.objectHistory}</p>
            ) : (
              <p>Little to no history can be found for this artwork.</p>
            )}
           </article>
          <p>
             Made in
            {ukSingleArtwork.placesOfOrigin.length != 0 ? (
              <span> {ukSingleArtwork.placesOfOrigin[0].place["text"]}</span>
            ) : (
              <span> Unknown</span>
            )}
          </p>
           

            <p>
              Estimated production date is 
              {ukSingleArtwork.productionDates.length != 0 ? (
                <span> {ukSingleArtwork.productionDates[0].date.text}</span>
              ) : <span> not known</span>}
            </p>

                 <p> 
               It was added to V&A collection in 
              {ukSingleArtwork.accessionYear ? <span> {ukSingleArtwork.accessionYear} </span> : <span> unknown date</span>}
            </p>
           
   
          </section>
        </section>
      </article>
    );
};

export default UKSingleArt;
