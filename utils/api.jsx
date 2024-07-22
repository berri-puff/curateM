import axios from "axios";

const app = axios.create({
  baseURL: "https://api.vam.ac.uk/v2",
});
export const getsRandomUKArtworks = (pageNum) => {
  return app
    .get(`/objects/search?random=1&page_size=20&page=${pageNum}`)
    .then(({ data }) => {
      return data.records;
    });
};

export const getsUkArtworkById = (id) => {
  return app.get(`/museumobject/${id}`).then(({ data }) => {
    return data.record;
  });
};

export const getUsArtworks = () => {
  return app
    .get(`https://openaccess-api.clevelandart.org/api/artworks`)
    .then(({ data }) => {
      return data;
    });
};

export const getSingleUsWork = (id) => {
  return app
    .get(`https://openaccess-api.clevelandart.org/api/artworks/${id}`)
    .then(({ data }) => {
      return data;
    });
};

export const getsUsWorkbyKeyword = (keyword) => {
  return app
    .get(`https://openaccess-api.clevelandart.org/api/artworks/?q=${keyword}`)
    .then(({ data }) => {
      return data;
    });
};

export const getsUkWorkbyfilters = (pageNum, category, location) => {
    if (category === "") {
      
        return app
        .get(
          `https://api.vam.ac.uk/v2/objects/search?id_place=${location}&page_size=20&page=${pageNum}`
        )
        .then(({ data }) => {
          return data.records;
        });
    }
    else if (location === "") {
     
          return app
    .get(
      `https://api.vam.ac.uk/v2/objects/search?id_category=${category}&page_size=20&page=${pageNum}`
    )
    .then(({ data }) => {
      return data.records;
    });
    }
    
    else {
    
        return app
        .get(
          `https://api.vam.ac.uk/v2/objects/search?id_category=${category}&id_place=${location}&page_size=20&page=${pageNum}`
        )
        .then(({ data }) => {
          return data.records;
        });
 
}}
