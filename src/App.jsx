
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/home'
import Navigation from './components/nav'
import Header from './components/header'

import Exhibits from './components/exhibits'
import Error from './components/error-page'
import UKRegion from './components/uk-region/uk-main-page'
import UKSingleArt from './components/uk-region/uk-single-art'
import USRegion from './components/us-region/us-main-page'
import USSingleArt from './components/us-region/us-single-art'

import { ExhibitProvider } from './context/exhibit-context'

function App() {
  return (
    <body>
  
      <ExhibitProvider>
      <Header/>

  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/exhibits" element={<Exhibits/>} />
    <Route path='/*' element={<Error/>}/>
    <Route path='/uk' element={<UKRegion/>} />
    <Route path='/uk/:artId' element={<UKSingleArt/>}/>
    <Route path='/us' element= {<USRegion/>}/>
    <Route path='/us/:artId' element= {<USSingleArt/>} />
  </Routes>    
  </ExhibitProvider>

  </body>
    )
}

export default App
