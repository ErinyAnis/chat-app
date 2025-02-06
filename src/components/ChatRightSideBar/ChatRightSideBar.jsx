/* eslint-disable react/prop-types */
import assets from "../../assets/assets";
import { GrLocation } from "react-icons/gr";
import { FaRegUser, FaTwitter } from "react-icons/fa6";
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChatRightSideBar = ({ currentChat }) => {

  return (
    <div className="border-2 rounded-md custom-card-padding relative scroll">
      <div className="xl:h-[calc(100vh-5rem)] overflow-auto">
        <h3 className="text-lg font-semibold mb-3 xl:mb-7 text-center xl:text-left">
          About
        </h3>
        <div className="text-center max-w-[70%] m-auto">
          <img
            src={
              currentChat.avatarImage
                ? currentChat.avatarImage
                : assets.profile_img
            }
            alt="profile_img"
            className="w-14 lg:w-16 xl:w-20 rounded-full m-auto aspect-square"
          />
          <div className="my-3">
            <h3 className="font-semibold text-gray-600">
              {currentChat.username}
            </h3>
            <p className="text-gray-500 text-xs font-medium mt-0.5">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="flex xl:block items-center flex-wrap justify-center gap-5 xl:justify-between my-6 xl:my-0">
          {/* info */}
          <div>
            <div className="xl:my-4">
              <div className="flex items-center justify-between gap-5 text-sm mb-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GrLocation size={18} className="pt-0.5" />
                  <span className="font-medium">Location</span>
                </div>
                <div className="font-medium text-gray-950">Bangladesh</div>
              </div>

              <div className="flex items-center justify-between text-sm mb-2 gap-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaRegUser size={16} className="pt-0.5" />
                  <span className="font-medium">Members since</span>
                </div>
                <div className="font-medium text-gray-950">Oct 2021</div>
              </div>

              <div className="flex items-center justify-between text-sm mb-2 gap-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <HiMiniLanguage size={18} className="pt-0.5" />
                  <span className="font-medium">Language</span>
                </div>
                <div className="font-medium text-gray-950">English</div>
              </div>
            </div>
            <hr className="hidden xl:block" />
          </div>

          {/* social */}
          <div className="border-x-2 xl:border-none px-10 lg:px-20 xl:px-0">
            <div className="xl:my-4 flex flex-col gap-1.5">
              <Link className="flex items-center gap-2 font-medium text-gray-700 text-sm custom-transition hover:text-gray-500">
                <MdOutlineFacebook size={18} />
                <span>Facebook</span>
              </Link>
              <Link className="flex items-center gap-2 font-medium text-gray-700 text-sm custom-transition hover:text-gray-500">
                <FaTwitter size={16} />
                <span>Twitter</span>
              </Link>
              <Link to={"/chat"} className="flex items-center gap-2 font-medium text-gray-700 text-sm custom-transition hover:text-gray-500">
                <FaInstagram size={16} />
                <span>Instagram</span>
              </Link>
            </div>
            <hr className="hidden xl:block" />
          </div>

          {/* shared docs */}
          <div className="xl:py-3">
            <h3 className="text-gray-400 font-medium text-sm mb-2 xl:mb-3.5">
              Shared documents
            </h3>
            <div className="scroll">
              <div className="max-h-[100px] lg:max-h-[200px] xl:max-h-[220px] overflow-auto grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-2">
                <img
                  src={assets.pic1}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
                <img
                  src={assets.pic2}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
                <img
                  src={assets.pic3}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
                <img
                  src={assets.pic4}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
                <img
                  src={assets.pic1}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
                <img
                  src={assets.pic2}
                  alt="pic"
                  className="rounded-md cursor-pointer w-20 xl:w-48"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-3">
          <button
            className="flex gap-1 items-center xl:absolute xl:bottom-4 xl:left-[50%] xl:-translate-x-[50%] hover:bg-gray-300 hover:text-black text-white px-4 py-2.5 rounded-md text-sm custom-transition bg-black"
          >
            <BiPowerOff/> Logout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ChatRightSideBar;
