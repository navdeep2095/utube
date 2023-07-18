import React, { useEffect, useRef, useState } from 'react';
import menu from '../images/hamburger-menu-svgrepo-com.svg';
import logo from '../images/user-3296.svg'
import { toggleMenu } from '../utils/appLevelSlice';
import { useDispatch } from 'react-redux';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [querySuggestionsJson, setQuerySuggestionsJson] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const timerID = useRef(null);
  const YOUTUBE_SEARCH_API = process.env.REACT_APP_YOUTUBE_SEARCH_API+searchQuery;

  useEffect(()=>{
    timerID.current = setTimeout(()=>{
      getSearchSuggestions();
    },2000);
    return () => clearTimeout(timerID.current);
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const querySuggestions = await fetch(YOUTUBE_SEARCH_API);
    const queryResult = await querySuggestions.json();
    setQuerySuggestionsJson(queryResult[1]);
    console.log(queryResult);
  };

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg bg-blend-darken'>
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer' alt='menu' src={menu} onClick={()=>toggleHandler()}/>
        <img className='h-8 mx-2 cursor-pointer' alt='uTube' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAclBMVEX/AAD/////6+v//Pz/rq7/7u7/tLT/ycn/+Pj/8/P/GRn/V1f/4OD/CAj/1dX/5ub/fHz/dnb/W1v/oKD/Zmb/ICD/ExP/0ND/goL/Pj7/KSn/h4f/u7v/kpL/U1P/a2v/MjL/TEz/p6f/Rkb/wsL/mprT0h3pAAADX0lEQVRoge2a6ZaiMBCFK80aZVNENhFE+v1fcRJXtAeHStLkzDm5/unT3fKJIZVbCxCdAkM3dEM3dEM3dEM3dD106yLf9yl1mL5exX9FKfvr9d/k6U4cDW7ff9dFkWx261PZdVW2h48KV1XVleVpu9skRd2kvX3Igy9/Np1Gg9205WcIXtV2k7p5/IlueXW3Us0dK8zWfTRBd8+/SX7oOPyFHm8XYXO1X+/0YTE2U+i90u0l4Uz2mL7onV80POl0cTgAfdA3GujtnR5pgANEN/pOC313pcda4ADxhe5qorsXequJ3nK6tUx4/6mzxehxpom+Chg91wQH8Bhd10PHgz2QRhu9ZvTlzvV3rRlduYebrY7RdT3yAJkF/q/6yI/aOxCE6Dcpw0eAP16pstCcg4d+DzMEazX0AQ4CdEIOnQq6C/hQd824GgXL7wLeS9+8eCC//D2konRC8k6S3kAtTme2SC5UFZDI0Nnyy9A3gPfy5EUy2WcL+GeHvGkQPqe2gA8c73TxHPQM+A/+k04I/tnlKqFTQhfb/RV7KaGz5cc78wzwx/sEnVgpNvjuBU7rKTohDnL7hoA2Fx+rmwFq96ums7MXsYnw7H/RCcVEENX3jvE9qr95ijq0QqXPvPWNu9Je4X4nLjZyrdTFughffKpUxXmnQF+HJXKKzji8O+Qq4aiAPgjmgkfAr9aPBRf2Vq20r6MiC37TRtLTWraMp07k/LwnV+urARmexvRYNpX9Fs/jqJiTHMsWzWEtu5OGM7ZY/h6d5NnA2CK1C6x/m5InULdRV92MBGpW+FNxQmEAVF+9bkXB0lqr1FinLQkQRbU3AfEatXzIEhWvzy/dfn6K9ybw4UaVeF8m0LXl9rwn5evqx5U+70XqaQJf2sCM3mui91p70MG1/66nJ3a0rnQ9e+5AbnMXOm7+TO50HSsfPOgaom1KnnSCd/VyKsiYvnAfPCWvdEUeeZa6+5DXaL7OspdxOVXznHQc54S+V3Tqmqx/U5jtXGdEfK8FOPmhT7a/8BnKtraH4I02Wf/iI6V2nzZ1krTrc9lV2Wzjv6q68nS8j5W63vRU6bx52tssLR+l5dOzcRBEeZ57TIPnsZ+iKIjjy1jtY6h21nX/k1liQzd0Qzd0Qzd0Qzf0WfoDqyw163PqMTEAAAAASUVORK5CYII="/>
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