import React from 'react';
import bgDownloadImage from "../../assets/images/download2.png";
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

const Download = () => {
   
    
    return (
        
        <div className="flex pt-12 p-6  justify-center gap-24 pb-10 download-main">
            <div className="w-2/5 relative  ">
                <img
                    className="object-contain rotate-12 ml-auto" 
                    src={bgDownloadImage} 
                    alt="Background Image"
                    layout={"fill"}
                />    
            </div>
            <div className='download-right flex flex-col w-2/5 p-6  pt-28 '>
               
                <h6 className="text-lg  text-black font-wellingtons font-bold  mb-4">Mobile Application Now Available !!!</h6>
                <h4 className="text-2xl  text-black montserrat-alternates-extrabold-italic font-bold mb-12">Start Learning Today !!</h4>
                <h1 className="text-5xl text-black permanent-marker-regular font-bold ">Download Now !!</h1>
                <div className='download-btn-grp flex gap-6 mt-12'>
                  <button className='ios-btn bg-gray-300 px-6 py-4 text-lg font-semibold flex gap-4 justify-center rounded-lg hover:bg-gray-500 hover:text-white transition duration-300'>
                  <FaGooglePlay size={30}    />
                        
                    Download Now

                  </button>
                  <button className='android-btn bg-gray-300 px-6 py-4 text-lg font-semibold flex gap-4 justify-center rounded-lg hover:bg-gray-500 hover:text-white transition duration-300'>
                  
                  <FaAppStore  size={30}   />
                    Download Now
                  </button>
                </div>
            </div>
        </div>
    );
}

export default Download;
