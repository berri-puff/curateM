import { useContext } from "react";
import { ExhibitContext } from "../context/exhibit-context";

const Exhibits = () => {
  const { exhibit } = useContext(ExhibitContext);

  if (exhibit.length === 0) {
    return (
      <article className="empty-exhibit">
        <h1>
          All your temporary artwork will be shown here, it is currently empty
          though!
        </h1>
        <p>Start exploring artworks!</p>
      </article>
    );
  } else
    return (
      <article>
        <h1 id="page-title">Exhibition</h1>
       <section className="columns" id="exhibit-view">


      
        {exhibit.map((artwork) => {
          if (artwork.hasOwnProperty("systemNumber")) {
            return (
              <section id="single-card"className="column has-text-black">
                {artwork.images != 0 ? (
                  <img
                  width={300}
                  height="auto"
                    src={`https://framemark.vam.ac.uk/collections/${artwork.images[0]}/full/full/0/default.jpg`}
                    alt={
                      artwork.physicalDescription ? (
                        <p>{artwork.physicalDescription}</p>
                      ) : (
                        <p>No description given</p>
                      )
                    }
                  ></img>
                ) : (
                  <img 
                  
                  width={300}
                  height="auto"
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019" />
                )}

                <p>© Victoria and Albert Museum, London</p>
                <p>ID: {artwork.systemNumber}</p>
                <p>
                  Found in V&A Museum Collection, on shelf
                  {artwork.galleryLocations[0].shelf ? (
                    <span> {artwork.galleryLocations[0].shelf}</span>
                  ) : (
                    <span> N/A</span>
                  )}
                  , box
                  {artwork.galleryLocations[0].box ? (
                    <span> {artwork.galleryLocations[0].box} </span>
                  ) : (
                    <span> N/A</span>
                  )}
                  , in case
                  {artwork.galleryLocations[0].case ? (
                    <span> {artwork.galleryLocations[0].case} </span>
                  ) : (
                    <span> N/A</span>
                  )}
                </p>

                <a target="blank" href="https://www.vam.ac.uk/info/contact-us">
                  Victoria and Albert Museum
                </a>
              </section>
            );
          } else {
            return (
              <section id="single-card" className="column has-text-black">
                <img
                width={300}
                height="auto"
                  src={artwork.images.web.url}
                  alt="No description given"
                ></img>
                <p>© The Cleveland Museum of Art</p>
                <p>ID: {artwork.id}</p>
                <p>
                  Found in Cleveland Museum of Art, {artwork.department}
                  {artwork.currentLocation ? <span>,artwork.currentLocation </span>: null}
                </p>

                <a
                  target="blank"
                  href="https://www.clevelandart.org/contact-us"
                >
                  Cleveland Museum of Art
                </a>
              </section>
            );
          }
        })}
         </section>
      </article>
    );
};

export default Exhibits;
