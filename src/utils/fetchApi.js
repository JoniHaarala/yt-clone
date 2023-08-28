import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        part: 'snippet,id',
        maxResults: '100'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY, // here go your API key
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (query) => {
    try {
        const { data } = await axios.request(`${BASE_URL}/${query}`, options);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}