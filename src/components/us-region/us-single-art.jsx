import { useState, useContext, useEffect } from "react";
import { FavouriteContext } from "../../context/faves-context";
import { useParams } from "react-router-dom";
import { getSingleUsWork } from "../../../utils/api";
import { ExhibitContext } from "../../context/exhibit-context";
import { splitTime } from "../../../utils/splitTime";

const USSingleArt = () => {
  const [usSingleArtwork, setUsSingleArtwork] = useState([]);
  const { faves, setFaves } = useContext(FavouriteContext);
  const { exhibit, setExhibit } = useContext(ExhibitContext);
  const { artId } = useParams();

  useEffect(() => {
    getSingleUsWork(artId).then((result) => {
      setUsSingleArtwork(result.data);
    });
  }, []);
  console.log(usSingleArtwork);
  const favouriteArtwork = () => {
    setFaves((currentFaves) => {
      if (Array.isArray(currentFaves)) {
        return [...currentFaves, usSingleArtwork];
      } else {
        return [usSingleArtwork];
      }
    });
  };

  const addToExhibit = () => {
    setExhibit((currentExhibit) => {
      if (Array.isArray(currentExhibit)) {
        return [...currentExhibit, usSingleArtwork];
      } else {
        return [usSingleArtwork];
      }
    });
  };


  if (usSingleArtwork.length != 0) {
    return (
      <article>
        <h1>This will contain one single us art piece and their information</h1>
        {usSingleArtwork.title}
        <p>By: {usSingleArtwork.creators[0].description}</p>
        <h3>ABOUT:</h3>
        <p>{usSingleArtwork.description}</p>
        <img src={usSingleArtwork.images.web.url}></img>
        <button
          aria-label="favourite"
          onClick={() => {
            favouriteArtwork();
          }}
        >
          Favourite
        </button>

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
