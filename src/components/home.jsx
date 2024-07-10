import { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
const Home = ()=>{

    return <main>
        <article>
            Want to start curating your own exhibition artworks but do not know where to start? 
            On Curate'M, short for Curate Them, right here you can explore art works from different regions, see any you like? Go ahead and favourite them, even add them to your temporary exhibiton file!
            Currently, Only UK and Us regions are open for business. Get start right now!
        </article>
       
        <h2>formatting idea: </h2>
        <p>screenshots of each of the component and how it works </p>
        <p>as the page scrolls down, the previous component fades out</p>
        <h2>GET STARTED</h2>
        <Link to='/uk'>UK <FaArrowRight/> </Link>
        <Link to='/us'>USA <FaArrowRight/></Link>
    </main>
}

export default Home