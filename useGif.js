import React from 'react'
import axios from 'axios';
import  {useEffect} from 'react';
import  {useState} from 'react';

// access a API key.
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
//const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = (tag) => {
 //const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const [gif,setGif] = useState('');
const [loading,setLoading] = useState('false');


async function fetchData(tag) {
  setLoading(true);
// return promise
const {data} = await axios.get(tag ? url:randomurl);
const imageSource = data.data.images.downsized_large.url;
// connect zif and  setzif
setGif(imageSource);
setLoading(false);
}
// function call
useEffect( () =>{
fetchData('car');
},[])

return{gif,loading,fetchData};
//click handler ye bata hai click karne se kya effect par raha hai
}

export default useGif;
