import Homepage from "../../Components/HomePage/homepage";
import Education from "../../Components/HomePage/education";
import Download from "../../Components/HomePage/download";
import Contact from "../../Components/HomePage/contact";
import Features from "../../Components/HomePage/Features";
import VideoPage from "../../Components/HomePage/VideoPage";
// import Header from "../Components/HomePage/Header";

export default function IndexPage() {
  return (
    <>
      <div>
        {/* <Header /> */}
        <Homepage />
        <Education />
        <Features />
        <Download />
        <Contact />
        {/* <VideoPage /> */}
      </div>
    </>
  );
}
