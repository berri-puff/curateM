import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleUsWork } from "../../../utils/api";
import { ExhibitContext } from "../../context/exhibit-context";
import { splitTime } from "../../../utils/splitTime";
import Error from "../error-page";
const USSingleArt = () => {
  const [usSingleArtwork, setUsSingleArtwork] = useState([]);

  const {setExhibit } = useContext(ExhibitContext);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([null])
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const [addBtnDisable, setAddBtnDisable] = useState(false)
  const [exhibitLoad, setExhibitLoad] = useState(false)
  const { artId } = useParams();

  useEffect(() => {
    setLoading(true)
    getSingleUsWork(artId).then((result) => {
      setLoading(false)
      setUsSingleArtwork(result.data);
    }).catch((error) =>{
      setLoading(false)
      setError(error.response)
    })
  }, []);

console.log(error)

  const addToExhibit = () => {
    setAddBtnDisable(true)
    setExhibitLoad(true)
    setExhibit((currentExhibit) => {
      if (Array.isArray(currentExhibit)) {
        setAddBtnDisable(false)
        setExhibitLoad(false)
        setFeedbackMsg('Artwork added to your list successfully!')
        return [...currentExhibit, usSingleArtwork];
      } else if (!currentExhibit) {
        setAddBtnDisable(false)
        setExhibitLoad(false)
        setFeedbackMsg('Artwork added to your list successfully!')
        return [usSingleArtwork];
      }
      else {
        setAddBtnDisable(false)
        setLoadingState(false)
        setFeedbackMsg('Artwork not added to the page :(')

      }
    });
  };

if(loading ) {
  return       <progress className="progress is-small is-primary" max="100">20%</progress>
}
else if (error && usSingleArtwork.length === 0) {
  const msg = (error.data && error.data.detail) 
  return <Error status={error.status} msg={msg}/>

}
  if (usSingleArtwork.length != 0 && loading === false) {
    return (
      <article>
        <h2 className="title is-4"> {usSingleArtwork.title}</h2> 
        <p className="subtitle is-6">By: {usSingleArtwork.creators[0].description}</p>
        <p>{feedbackMsg != '' ? <p>{feedbackMsg}</p> : null }</p>
<p>{exhibitLoad ? <p>adding to your exhibit</p> : null}</p>
       <section className="columns">
      <section className="column">
 <img src={usSingleArtwork.images.web.url}/>
 <p className="subtitle is-7">
              © The Cleveland Museum of Art
            </p>
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
      </section>
      <section className="column">
         <h3>ABOUT:</h3>
        <p>{usSingleArtwork.description}</p>
       

       

        <h3>History:</h3>
        <p>
          This piece of work was added to the collection in the year 
          {splitTime(usSingleArtwork.accession_date)}, falls under the
          {usSingleArtwork.collection} collection
        </p>
        <p>Here's a little fun fact! {usSingleArtwork.did_you_know}</p>
        <p>It is estimated to be made around {usSingleArtwork.creation_date}</p>

        <h3>Want to find it?</h3>
        <p>In the department of {usSingleArtwork.department} - {usSingleArtwork.current_location}</p>

      </section>
       </section>
       
       
      </article>
    );
  }
};

export default USSingleArt;
