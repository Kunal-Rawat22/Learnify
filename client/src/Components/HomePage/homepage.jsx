import React from 'react';
import backgroundImage from "../../assets/images/background.jpeg";
import childrenStudyingImage from "../../assets/images/children_studying.png"; // Importing the image

const homepage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="content flex justify-center items-center">
        <div className="flex flex-col items-start mr-32"> {/* Increased mr-32 for maximum space */}
          <h1 className="text-9xl text-red-300 permanent-marker-regular font-bold">AVANTI</h1>
          <p className="text-lg font-bold text-gray-700 mb-8 px-28 text-center">NO Child Should Be Left Behind</p>
        </div>
        
        <div className='pl-56'> {/* Increased pl-56 for maximum space */}
          <img src={childrenStudyingImage} alt="Children studying" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default homepage;
