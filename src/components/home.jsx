import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <article className="intro">
        Want to start curating your own exhibition artworks but do not know
        where to start? On Curate'M, short for Curate Them, right here you can
        explore art works from different regions, see any you like? Go ahead and
        add them to your temporary exhibiton file!
        Currently, Only UK and Us regions are open for business. Get start right
        now!
      </article>
      <section id="main-left">
        <img
          src="/photos/nav.jpg"
          alt="screenshot of the main header Curate'M and on the left nav bar drop down"
          width={550}
          height={660}
        />
        <p id="main-text">
          Getting started with the website, head over to 'Navigation' with a
          paintbrush to head straight towards the page you'd like to view or
          just click pn 'Curate'M' logo that will bring you back right here!
        </p>
      </section>
      <section id="main-right">
        <p id="main-text">
          Exploring random artworks from Victoria & Albert Museum or find
          specific artworks through filtering system via category such as
          'Painting', 'Ceramics' and/or from a number of countries which the
          pieces originated from.
        </p>
        <img
          width={550}
          height={660}
          src="/photos/uk-filtered.jpg"
          alt="image of different artwork on this website from UK API sources"
        />
      </section>
      <section id="main-left">
        <img
          src="/photos/us-filter.jpg"
          width={550}
          height={660}
          alt="screenshot of different artworks from an US based API source with search bar with the word plates"
        />
        <p id="main-text">
          Or, visit the US region to see what they have in store at The
          Cleveland Museum of Art. Looking for specific artworks? No problem,
          simply input a keyword into the search bar and hit 'Curate!' see what
          it gives you!
        </p>
      </section>
      <section id="main-right">
        <p id="main-text">
          On our website, you will be able to find details of each artwork and
          where they are stored and kept, even adding it to your own temporary
          exhibit. It does get removed from a single refresh, beware!
        </p>
        <img
          src="/photos/single-location.jpg"
          width={550}
          height={660}
          alt="screenshot of two buttons, one indicated to users to add to their list and the other informs of the artwork location"
        />
      </section>
      <section id="main-left">
        <img
          src="/photos/exh.jpg"
          width={550}
          height={660}
          alt="screenshot of artworks with minimal information in a row with 'Exhibition' on top of the page "
        />
        <p id="main-text">
          And finally, your own exhibition page with carefully selected
          pieces of work displayed all in one page with essential information,
          along with contacts to the corresponding museum in which you can
          contact.
        </p>
      </section>

      <h2 id="main-pointer">GET STARTED</h2>
      <Link to="/uk" id="location-pointer">
        
        <img
          width={250}
          src="https://static.thenounproject.com/png/3947728-200.png"
        />
       <p id="location-text">UK <FaArrowRight />
        </p> 
      </Link>
      <Link to="/us" id="location-pointer">
        <img
          width={250}
          src="https://cdn-icons-png.flaticon.com/512/49/49688.png"
        />
       <p id="location-text">USA <FaArrowRight /></p>  
      </Link>
    </main>
  );
};

export default Home;
