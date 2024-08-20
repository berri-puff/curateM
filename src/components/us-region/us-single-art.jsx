import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleUsWork } from "../../../utils/api";
import { ExhibitContext } from "../../context/exhibit-context";
import { splitTime } from "../../../utils/splitTime";
import Error from "../error-page";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiPaintRollerFill } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";

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
      const alreadyInGallery = currentExhibit.some(
        (item) => item.id === usSingleArtwork.id
      );
      if (alreadyInGallery) {
        toast("This artwork is already in your gallery!", {
          icon: <PiPaintRollerFill />,
          duration: 4000,
          position: "bottom-center",
        });
        setAddBtnDisable(true);
        return currentExhibit;
      } else if (Array.isArray(currentExhibit)) {
        setAddBtnDisable(false);

        toast.success("Artwork added to your list successfully!", {
          duration: 4000,
          position: "bottom-center",
        });
        setAddBtnDisable(true);
        return [...currentExhibit, usSingleArtwork];
      } else if (!currentExhibit) {
        setAddBtnDisable(false);

        toast.success("Artwork added to your list successfully!", {
          duration: 4000,
          position: "bottom-center",
        });
        setAddBtnDisable(true);
        return [usSingleArtwork];
      } else {
        setAddBtnDisable(false);
        setLoadingState(false);
        toast.error("Error, can not add to gallery, try again later", {
          duration: 4000,
          position: "bottom-center",
        });
      }
    });
  };

  if (loading) {
    return (
      <progress id="loading-bar" className="progress is-primary" max="5">
      </progress>
    );
  } else if (error && usSingleArtwork.length === 0) {
    const msg = error.data && error.data.detail;
    return <Error status={error.status} msg={msg} />;
  }
  if (usSingleArtwork.length != 0 && loading === false) {
    return (
      <article id="single-art" className='has-text-black'>
 
        <h2 id="single-title" className="title is-2">
          {" "}
          {usSingleArtwork.title}
        </h2>
        <p className="subtitle is-6">
          By:{" "}
          {usSingleArtwork.creators.length != 0 ? (
            <span>{usSingleArtwork.creators[0].description}</span>
          ) : (
            <span>Unknown Artist</span>
          )}
        </p>

        <section className="columns">
          <section className="column">
            <img src={usSingleArtwork.hasOwnProperty('web') ? usSingleArtwork.images.web.url : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019"} />
            <p className="subtitle is-7">© The Cleveland Museum of Art</p>
            <Toaster  containerStyle={{
    position: 'relative',
  }}/>
            <button
            id="add-exhibit-btn"
              aria-label="add to exhibit"
              className="button is-normal is-rounded is-dark is-primary mr-3 mt-3"
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
                  className="button is-normal is-link is-light is-rounded mt-3"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <p>
                    Where to find it <IoMdArrowDropdown/>
                  </p>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <p className="dropdown-item">The Cleveland Museum of Art</p>
                  <p className="dropdown-item">
                    DEPARTMENT : {usSingleArtwork.department}
                  </p>
                  <p className="dropdown-item">
                    LOCATION: {usSingleArtwork.current_location}
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="column is-vcentered mb-5">
            <article className="p-2 mb-2">
              <h2 className="title title-2">ABOUT:</h2>
              <p>{usSingleArtwork.description}</p>
            </article>

            <article className="p-2 mb-2">
              <h2 className="title title-2">History:</h2>
              <p>
                This piece of work was added to the collection in the year
                <span> {splitTime(usSingleArtwork.accession_date)}</span>, falls
                under the
                <span> {usSingleArtwork.collection}</span> collection
              </p>
              <h3>
                Here's a little fun fact about {usSingleArtwork.title}!
                <p>{usSingleArtwork.did_you_know}</p>
              </h3>
            </article>

            <p>
              It is estimated to be made around {usSingleArtwork.creation_date}
            </p>
          </section>
        </section>
      </article>
    );
  }
};

export default USSingleArt;
