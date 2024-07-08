
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/home'
import Navigation from './components/nav'
import Header from './components/header'
import Favourites from './components/favourites'
import Exhibits from './components/exhibits'
import Error from './components/error-page'
import UKRegion from './components/uk-region/uk-main-page'
import UKSingleArt from './components/uk-region/uk-single-art'
import USRegion from './components/us-region/us-main-page'
import USSingleArt from './components/us-region/us-single-art'
import { FavouriteProvider } from './context/faves-context'
import { ExhibitProvider } from './context/exhibit-context'

function App() {
  return (
    <body>
      <FavouriteProvider>
      <ExhibitProvider>
      <Header/>
      <Navigation/>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path ="/exhibit" element={<Exhibits/>} />
    <Route path='/*' element={<Error/>}/>
    <Route path='/uk' element={<UKRegion/>} />
    <Route path='/uk/:artid' element={<UKSingleArt/>}/>
    <Route path='/us' element= {<USRegion/>}/>
    <Route path='/us/:artid' element= {<USSingleArt/>} />
  </Routes>    
  </ExhibitProvider>
  </FavouriteProvider>

  </body>
    )
}

export default App
