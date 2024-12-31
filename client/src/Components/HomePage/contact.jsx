import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact-main grid grid-cols-1 md:grid-cols-2 xl:px-32 lg:px-24 md:px-16 sm:px-10 px-4 py-10">
      {/* Contact Left Div */}
      <div className="contact-left flex flex-col py-8 px-8 items-center md:items-start">
        <div className="w-full sm:w-4/5 md:w-full lg:w-4/5 xl:w-10/12 Contact-Details text-center md:text-left">
          {/* Contact Heading */}
          <h1 className="text-3xl font-bold text-black font-tt-wellingtons py-6 ">
            Contact Us
          </h1>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-2">
              ADDRESS
            </h4>
            <h6 className="text-sm md:text-base text-black font-tt-wellingtons">
              BPIT, PSP-4, Dr KN Katju Marg, Sector 17, Rohini, Delhi 110089
            </h6>
          </div>
          <div className="mb-4">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">
              EMAIL ADDRESS
            </h4>
            <h6 className="text-sm md:text-base text-black font-tt-wellingtons">
              drishtibpit@gmail.com
            </h6>
          </div>
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-bold text-black font-tt-wellingtons py-1">
              Phone Number
            </h4>
            <h6 className="text-sm md:text-base text-black font-open-sauce">
              +91 79732-58997
            </h6>
          </div>
          <div className="Socials">
            <h4 className="text-xl font-bold text-black font-tt-wellingtons py-6">
              Our Socials
            </h4>
            <div className="flex gap-4 mx-auto justify-center md:justify-start">
              <Link
                className="flex items-center md:items-start"
                to={"https://www.instagram.com/kunalrawat2001/"}
              >
                <FaFacebook
                  size={40}
                  style={{
                    color: "black",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1877F2")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  className="hover:cursor-pointer "
                />
              </Link>
              <Link
                className="flex items-center md:items-start"
                to={"https://github.com/Kunal-Rawat22"}
              >
                <FaTwitter
                  size={40}
                  style={{
                    color: "black",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1DA1F2")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  className=" hover:text-yellow-400 hover:cursor-pointer "
                />
              </Link>
              <Link
                className="flex items-center md:items-start"
                to={"https://www.instagram.com/kunalrawat2001/"}
              >
                <FaInstagram
                  size={40}
                  style={{
                    color: "black",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E1306C")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  className=" hover:text-yellow-400 hover:cursor-pointer "
                />
              </Link>
              <Link
                className="flex items-center md:items-start"
                to={"https://www.linkedin.com/in/kunal-rawat-53683a243/"}
              >
                <FaLinkedin
                  size={40}
                  style={{
                    color: "black",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0077B5")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  className=" hover:text-yellow-400 hover:cursor-pointer "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Right Div */}
      <div className="contact-right flex flex-col py-8 px-8 items-center md:items-end">
        <div className="w-full sm:w-3/5 md:w-full lg:w-3/4 xl:w-3/5 Suggestion shadow-xl p-4 border border-1">
          <h1 className="text-3xl font-bold text-black font-tt-wellingtons py-6 text-center mx-auto">
            Suggestions
          </h1>
          <form className=" mx-auto flex flex-col gap-4">
            <div className="Name">
              <input
                type="text"
                id="Name"
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Name"
              />
            </div>
            <div className="PhNo">
              <input
                type="text"
                id="PhNo"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                placeholder="Phone Number"
              />
            </div>
            <div className="EmailId">
              <input
                type="text"
                id="EmailId"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 "
                placeholder="E-mail ID"
              />
            </div>
            <div className="Message">
              <textarea
                type="text-area"
                id="Message"
                rows={4}
                cols={40}
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Message"
              />
            </div>
            <button className="bg-yellow-400 text-gray-700 text-lg font-bold w-full px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
