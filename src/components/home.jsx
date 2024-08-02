
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
const Home = ()=>{

    return <main>
        <article className="intro">
            Want to start curating your own exhibition artworks but do not know where to start? 
            On Curate'M, short for Curate Them, right here you can explore art works from different regions, see any you like? Go ahead and favourite them, even add them to your temporary exhibiton file!
            Currently, Only UK and Us regions are open for business. Get start right now!
        </article>
        <section className="main-left">
    <img src="src/components/photos/nav.png"  width={895} height={895}/> 
    <p>
        Getting started with the website, head over to 'Navigation' with a paintbrush to head straight towards the page you'd like to view or just click the main page that will bring you back right here!
    </p>
</section>
         <section className="main-right">
             <img width={895} height={895}src="src/components/photos/uk-filtered.png"alt="image of different artwork on this website from UK API sources"/>
             <p>Exploring random artworks from Victoria & Albert Museum or find specific artworks through filtering through category such as 'Painting', 'Ceramics' and/or filter from a number of places which the pieces originated from. </p>
         </section>
         <section className="main-left">
 <img src="src/components/photos/us-filter.png" width={895} height={895} alt="screenshot of different artworks from an US based API source with search bar with the word plates"/>
 <p>
    Or, visit the US region to see what they have in store at The Cleveland Museum of Art. Looking for specific artworks? No problem, simple input a keyword into the search bar and hit 'Curate!' see what the results are! 
 </p>

         </section>
    <section className="main-right">
                <img src="src/components/photos/single-location.png" width={895} height={895} alt="screenshot of two buttons, one indicated to users to add to their list and the other informs of the artwork location"/>
                <p>
                    On our website, you will be able to find details of each artwork and where they are stored and kept, even adding it to your own temporary exhibit. It does get removed from a single refresh, beware! 
                </p>
    </section>
<section className="main-left">
       <img src="src/components/photos/exh.png" width={895} height={895} alt="screenshot of artworks with minimal information in a row with 'Exhibition' on top of the page "/>
       <p>
         And finally, your very own exhibition page with all carefully selected pieces of work displayed all in one page with essential information, along with contacts to the corresponding museum in which you can contact.
       </p>
      

</section>

        
        <h2 id="page-title">GET STARTED</h2>
        <Link to='/uk'> <img width={250}src="https://static.thenounproject.com/png/3947728-200.png"/> UK <FaArrowRight/> </Link>
        <Link to='/us'><img width={250}src="https://cdn-icons-png.flaticon.com/512/49/49688.png"/>USA <FaArrowRight/></Link>
    </main>
}

export default Home