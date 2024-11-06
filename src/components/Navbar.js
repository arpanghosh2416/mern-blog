import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full font-mono text-lg font-bold text-center text-white bg-blue-600 border-b-4 border-blue-600'>
        <ul>
            <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8'>Home</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/about" className='pl-6 pr-8'>About</Link>
            </li>
            {/* <li className='inline-block py-4'>
                <Link to="/article" className='pl-6 pr-8'>Article</Link>
            </li> */}
            <li className='inline-block py-4'>
                <Link to="/articles-list" className='pl-6 pr-8'>Articles</Link>
            </li>
       </ul>
    </nav>
  )};
export default Navbar;