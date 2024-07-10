import axios from 'axios'

const app = axios.create({
    baseURL: "https://api.vam.ac.uk/v2"
})
export const getsUKArtworks = () =>{
   return app.get("/museumobject/O828146").then(({data})=>{
    return data.record
   })
}