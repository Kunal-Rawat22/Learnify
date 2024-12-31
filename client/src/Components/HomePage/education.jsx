import React from 'react';
import backgroundImage from "../../assets/images/background.jpeg";
import educationImage from "../../assets/images/education.jpg"; // Corrected the image import
import educationtextImage from "../../assets/images/educationtext.png";

const homepage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="content flex justify-center items-center">
        <div className="flex flex-col items-start mr-32"> {/* Increased mr-32 for maximum space */}
          <img src={educationImage} alt="Children studying" className="w-full max-w-lg rounded-lg shadow-lg" /> {/* Corrected the image variable */}
        </div>
        
        <div className='pl-56'> {/* Increased pl-56 for maximum space */}
          <img src={educationtextImage} alt="Children studying"  /> {/* Used the same image variable */}
        </div>
      </div>
    </div>
  );
}

export default homepage;
