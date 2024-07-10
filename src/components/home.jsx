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
        <h2>EXPLORE BY REGION</h2>
        <Link to='/uk'>UK Art works <FaArrowRight/> </Link>
        <Link to='/us'>USA Art works <FaArrowRight/></Link>
        <h2>Add some artworks auto scrolling down?</h2>
    </main>
}

export default Home