import axios from 'axios'

const app = axios.create({
    baseURL: "https://api.vam.ac.uk/v2"
})
export const getsRandomUKArtworks = () =>{
        return app.get('/objects/search?random=1&page_size=20&page=1').then(({data})=>{
    return data.records
   })
    
}

export const getsUkArtworkById = (id) =>{
return app.get(`/museumobject/${id}`).then(({data}) =>{
   return data.record
})
}