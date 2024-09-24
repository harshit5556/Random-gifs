
import{useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
// access a API key.


const Tag = () => {
 //save value of tag 
 const[tag, setTag] = useState('anime'); 

// const [gif,setGif] = useState('');
// const [loading,setLoading] = useState(false);


// async function fetchData() {
//   setLoading(true);
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
// // return promise
// const {data} = await axios.get(url);
// const imageSource = data.data.images.downsized_large.url;
// // connect zif and  setzif
// setGif(imageSource);
// setLoading(false);
// }

// // function call
// useEffect( () =>{
// fetchData();
// },[])
const {gif, loading, fetchData} = useGif(tag);

// //click handler ye bata hai click karne se kya effect par raha hai
  function clickHandler() {
 fetchData(tag);
  }

    return (
  <div
       className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
        {
          loading ? (<Spinner/>) :(<img src={gif} width ="430"/>)
        }


        <input
          className='w-10/12 bg-white opacity-80 py-2 px-1 rounded-lg text-lg mb-[3px] text-center'
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
          />


        <button onClick={clickHandler} className="w-10/12 mb-[6px] bg-white opacity-80 py-2 px-1 rounded-lg text-lg">Generate</button>
    </div>
  )
} 

export default Tag