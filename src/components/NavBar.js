import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-1 bg-gray-900'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
          <NavLink
            to='/'
            exact
            className='text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap cursive text-green-500 tracking-widest'
          >
            dranyl
          </NavLink>
        </div>
        <div
          className='lg:flex flex-grow items-center'
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none ml-auto'>
            <li className='nav-item'>
              <NavLink
                activeClassName='text-green-400'
                className='px-3 py-2 flex items-center text-md font-bold leading-snug text-green-800 hover:opacity-75 cursive'
                to='/project'
              >
                Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='text-green-400'
                className='px-3 py-2 flex items-center text-md font-bold leading-snug text-green-800 hover:opacity-75 cursive'
                to='/about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
