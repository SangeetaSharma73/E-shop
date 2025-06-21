import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-teal-500 text-white">
      <div className=" flex mx-auto justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide-Fast reliable shipping</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) (567) (890)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
