import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'fb709b9212msh82adc6a5ba60112p1c67a1jsn60b8ea9f1db5'
          }

    });
    return data
}