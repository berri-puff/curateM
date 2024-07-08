
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/home'
import Navigation from './components/nav'
import Header from './components/header'
import Favourites from './components/favourites'
import Exhibits from './components/exhibits'
import Error from './components/error-page'

function App() {
  return (
    <body>
      <Header/>
      <Navigation/>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path ="/exhibits" element={<Exhibits/>} />
    <Route path='/*' element={<Error/>}/>
  </Routes>
    </body>
    )
}

export default App
