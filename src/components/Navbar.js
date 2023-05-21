import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const Navbar = ({ setSearchQuery, searchQuery }) => {

  const [nave, setNave] = useState(false);

  return (
    // container
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">

        <div onClick={() => setNave(!nave)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
          Beast<span className="font-bold">Eats</span>
        </h1>

        <div className="items-center hidden p-1 bg-gray-200 rounded-full lg:flex text-[14px]">
          <p className="p-2 text-white bg-black rounded-full ">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>

      </div>

      {/* search input  */}
      <div className="flex items-center px-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="p-2 bg-transparent focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* cart button */}
      <button className="items-center hidden py-2 text-white bg-black rounded-full md:flex">
        <BsFillCartFill size={20} className="mr-2" />Cart
      </button>

      {/* mobile menu*/}

      {/* overLay */}
      {nave && (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
      )}

      {/* side drawer menu */}
      <div className={nave ? "fixed left-0 top-0 z-10 w-[300px] h-screen bg-white" : "fixed left-[-100%]"}>
        <AiOutlineClose size={30} onClick={() => setNave(!nave)} className="absolute cursor-pointer right-4 top-4 " />
        <h2 className="p-4 text-2xl">Beast <span className="font-bold">Eats</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
            <li className="flex py-4 text-xl"><MdFavorite size={25} className="mr-4" />Favorites</li>
            <li className="flex py-4 text-xl"><FaWallet size={25} className="mr-4" />Wallet</li>
            <li className="flex py-4 text-xl"><MdHelp size={25} className="mr-4" />Help</li>
            <li className="flex py-4 text-xl"><AiFillTag size={25} className="mr-4" />Promotions</li>
            <li className="flex py-4 text-xl"><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
            <li className="flex py-4 text-xl"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
