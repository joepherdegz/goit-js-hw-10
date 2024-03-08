import axios from 'axios';
axios.defaults.headers.common["x-api-key"] = "live_NGPLX2y6hrCGJMaXLsUNBCQbsHykrFZRTPlCWPfte6OpU1KNrXMOhkr5ds9bwWJn"

export const BASE_URL = "https://api.thecatapi.com/v1";
export const API_KEY = "live_NGPLX2y6hrCGJMaXLsUNBCQbsHykrFZRTPlCWPfte6OpU1KNrXMOhkr5ds9bwWJn"

export const fetchBreeds = () => {
    return axios.get(`${BASE_URL}/breeds?api-key=${API_KEY}`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.status);
            } else {
                return response.data;
            }
        })
        .catch(error => {
            throw new Error(error.response.status);
        });
};

export const fetchCatByBreed = (breedId) => {
    return axios.get(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(response.status);
            } else {
                return response.data;
            }
        })
        .catch (error => {
    throw new Error(error.response.status);
});
}