import React from 'react'
import money from "../assests/financial-profit.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3">
        <img src={money} className=" h-7 md:h-8" alt="Flowbite Logo" />
        <span className="self-center text-lg  md:text-2xl font-semibold whitespace-nowrap text-black">Expense Tracker</span>
      </a>

      <div className="flex md:order-2 space-x-3 md:space-x-0 md:gap-8">
      <Link
          to={'/'}
          className="hidden md:block py-2 px-3 text-gray-900 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          Home
        </Link>
      <Link
          to={'/expenses'}
          className="block py-2 px-3 text-gray-900 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          ExpenseList
        </Link>

       
      </div>
    </div>
  </nav>
  )
}
