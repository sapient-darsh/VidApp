// import axios from 'axios';

// const BASE_URl = 'https://youtube-v31.p.rapidapi.com/';

// const options = {
//     params: {
//         maxResults: 50,
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_API_KEY,
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };


// export const fetchAPI = async (url) => {
//     const { data } = await axios.get(`${BASE_URl}/${url}`, options);

//     return data;
// };





// import axios from 'axios';

// const BASE_URl = 'https://youtube-v31.p.rapidapi.com/';
// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// const retry = async (url, attempts = 5, delay = 1000) => {
//   try {
//     const { data } = await axios.get(`${BASE_URl}/${url}`, options);
//     return data;
//   } catch (error) {
//     if (error.response.status === 429 && attempts > 0) {
//       console.log(`Error: ${error.response.data.message}. Retrying in ${delay}ms...`);
//       await new Promise(resolve => setTimeout(resolve, delay));
//       return retry(url, attempts - 1, delay * 2);
//     } else {
//       throw error;
//     }
//   }
// };

// export const fetchAPI = async (url) => {
//   return retry(url);
// };


import axios from 'axios';

const BASE_URl = 'https://youtube-v31.p.rapidapi.com/';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URl}/${url}`, options);
        return data;
    } catch (error) {
        if (error.response.status === 429) {
            // Handle too many requests error
            console.error('Too many requests, please try again later.');
        } else {
            // Handle other errors
            console.error(error);
        }
    }
};
