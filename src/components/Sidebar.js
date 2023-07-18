import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.slice.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold py-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold py-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies & Shows</li>
      </ul>
    </div>
  );
}

export default Sidebar