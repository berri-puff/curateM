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
    setExhibit((currentExhibit) => {
      if (Array.isArray(currentExhibit)) {
        return [...currentExhibit, usSingleArtwork];
      } else {
        return [usSingleArtwork];
      }
    });
  };

if(loading ) {
  return <h1>Loading...</h1>
}
else if (error && usSingleArtwork.length === 0) {
  const msg = (error.data && error.data.detail) 
  return <Error status={error.status} msg={msg}/>

}
  if (usSingleArtwork.length != 0 && loading === false) {
    return (
      <article>
        <h1>This will contain one single us art piece and their information</h1>
        {usSingleArtwork.title}
        <p>By: {usSingleArtwork.creators[0].description}</p>
        <h3>ABOUT:</h3>
        <p>{usSingleArtwork.description}</p>
        <img src={usSingleArtwork.images.web.url}></img>

        <button
          aria-label="add to exhibit"
          onClick={() => {
            addToExhibit();
          }}
        >
          Add To My Exhibit
        </button>

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
      </article>
    );
  }
};

export default USSingleArt;
