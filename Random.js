
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// access a API key.


const Random = () => {
 
  const{gif,loading,fetchData} = useGif();
//click handler ye bata hai click karne se kya effect par raha hai
  function clickHandler() {
fetchData();
 }
    return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
          loading ? (<Spinner/>) :(<img src={gif} width ="430"/>)
        }
        <button onClick={clickHandler} className="w-9/12 bg-white opacity-80 py-2 px-1 rounded-lg text-lg">Generate</button>
    </div>
  )
} 

export default Random