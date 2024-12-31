import React from 'react';
import resourceImage from "../../assets/images/resource.png";
import mentorImage from "../../assets/images/mentor.webp";
import progressImage from "../../assets/images/progress.png";
import lessonsImage from "../../assets/images/lessons.png";
import leaderboardImage from "../../assets/images/leaderboard.png";
import remainderImage from "../../assets/images/remainder.png";
import backgroundImage from "../../assets/images/background.jpeg";

const Features = () => {
  return (
    <div className="grid grid-cols-3 row-span-3 gap-24 pt-12 pb-14 pl-12 pr-12" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="mr-14 col-span-3 text-6xl text-black abril-fatface-regular font-bold text-center">Our Features</h1>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain w-50 pt-2" src={resourceImage} alt="Resource Image"/>
        <p className="mt-4 text-3xl text-black abril-fatface-regular text-center">Resources</p>
      </div>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain w-48 pt-7" src={mentorImage} alt="Mentor Image"/>
        <p className="mt-8 text-3xl text-black abril-fatface-regular text-center">Mentor</p>
      </div>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain w-48" src={progressImage} alt="Progress Image"/>
        <p className="mt-4 text-3xl text-black abril-fatface-regular text-center">Progress</p>
      </div>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain self-center w-49" src={lessonsImage} alt="Lessons Image"/>
        <p className="mt-4 text-3xl text-black abril-fatface-regular text-center">Lessons</p>
      </div>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain self-center w-48" src={leaderboardImage} alt="Leaderboard Image"/>
        <p className="mt-4 text-3xl text-black abril-fatface-regular text-center">Leaderboard</p>
      </div>
      <div className="flex flex-col items-center hover:bg-gray-200 transition-colors duration-300">
        <img className="object-contain self-center w-48" src={remainderImage} alt="Remainder Image"/>  
        <p className="mt-4 text-3xl text-black abril-fatface-regular text-center">Remainder</p>
      </div>
    </div>
  );
}

export default Features;
