import React from 'react';
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare} from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
    return (
        <footer data-aos="fade-up" data-aos-duration="2000" className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center">
          <img src="https://i.ibb.co/SXgGjSD/attachment.png" alt="Website Logo" className=" mr-2" />
          <span className="text-lg font-bold">All Right Received TOY STARS</span>
        </div>
        <div className='flex items-center gap-5'>
            <h2 className='text-xl font-bold'>
                Social Link 
            </h2>
            <AiOutlineDoubleRight></AiOutlineDoubleRight>
            <AiOutlineDoubleRight></AiOutlineDoubleRight>
        </div>
        <div className="flex items-center space-x-4">

          <Link  className="text-gray-300 hover:text-white">
          <FaInstagramSquare className='w-8 h-10  text-[#f36709]'></FaInstagramSquare>
          </Link>
          <Link to='https://www.facebook.com' className="text-gray-300 hover:text-white">
            <CiFacebook className='w-10 h-10 text-blue-600'></CiFacebook>
          </Link>
        </div>
        <div className="text-gray-300 mt-4 text-2xl">
            <div className='py-3'>
                <h3 className='text-2xl font-bold text-white'>Address</h3>
            </div>
          <div>
          <p>123 Street, City</p>
          <p>State, Country</p>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;