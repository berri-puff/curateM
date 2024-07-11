import axios from 'axios'

const app = axios.create({
    baseURL: "https://api.vam.ac.uk/v2"
})
export const getsRandomUKArtworks = (pageNum) =>{

console.log(pageNum, 'in the api')

const params = {
    page: pageNum
}
if (!pageNum) {
        return app.get('/objects/search?random=1&page_size=10&page=1').then(({data})=>{
    return data.records
   })
}
else {
    return app.get(`/objects/search?random=1&page_size=10&page=${params.page}`).then(({data})=>{
        console.log(data.records)
       })
}
     

  
}