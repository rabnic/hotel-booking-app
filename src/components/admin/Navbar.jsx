import React from 'react';


function Navbar() {
  return (
    <nav className='bg-gray-700' >
      <div className='w-full xl:w-2/3 flex p-4 gap-8 justify-start items-center mx-auto my-auto'> 
        <div className='hidden'>
          <img src='./assets/icons/menu-bar.png' alt="" className="w-8 h-8 bg-slate-100 rounded-md" />
        </div>
        <div className='text-slate-200 font-bold leading-none text-center'>
          <p className='text-lg drop-shadow-sm sha'>G-STAY <br />
            <span className='text-gray-400 drop-shadow-md shadow-black'>hotels</span>
          </p>
        </div>
        <div className='ml-auto flex items-center gap-3'>
          <img src='./assets/icons/user.png' alt="" className="w-8 h-8" />
          <p className='text-green-600 text-lg font-semibold'>John Doe</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



