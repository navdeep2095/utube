import React, { useEffect, useRef, useState } from 'react';
import menu from '../images/hamburger-menu-svgrepo-com.svg';
import logo from '../images/user-3296.svg'
import { toggleMenu } from '../utils/appLevelSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { storeResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const selector = useSelector(store => store.searchSlice);
  const dispatch = useDispatch();
  const [querySuggestionsJson, setQuerySuggestionsJson] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const timerID = useRef(null);
  const YOUTUBE_SEARCH_API = process.env.REACT_APP_YOUTUBE_SEARCH_API+searchQuery;

  useEffect(()=>{
    timerID.current = setTimeout(()=>{
      if(selector[searchQuery]) {
        setQuerySuggestionsJson(selector[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    },200);
    return () => clearTimeout(timerID.current);
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const querySuggestions = await fetch(YOUTUBE_SEARCH_API);
    const queryResult = await querySuggestions.json();
    setQuerySuggestionsJson(queryResult[1]);
    // console.log(queryResult);
    dispatch(storeResults({
      [searchQuery]: queryResult[1]
    }));
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg bg-blend-darken'>
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer' alt='menu' src={menu} onClick={()=>toggleHandler()}/>
        <a href='/'><img className='h-8 mx-2 cursor-pointer' alt='uTube' src={process.env.REACT_APP_LOGO}/></a>
      </div>
      <div className='p-1 col-span-10'>
          <input 
            className='w-1/2 px-5 border border-gray-400 rounded-l-full' 
            type='text' 
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowResults(true)}
            onBlur={()=>setShowResults(false)}
          />
          <button className='border border-gray-400 rounded-r-full px-2 bg-gray-100'>🔍</button>
          {showResults&&<div className='fixed bg-gray-100 py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
          {
            querySuggestionsJson.map((suggestion, index)=>(
              <li className='py-2 shadow-sm hover:bg-gray-100' key={index}>🔍 {suggestion}</li>
            ))
          }
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src={logo} alt='user icon'/>
      </div>
    </div>
  )
}

export default Head