/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import assets from "../assets/assets";
import { HiDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";

const Owner = ({ currentUser }) => {
  const navigate = useNavigate();
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserImage, setCurrentUserImage] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    currentUserImage &&
    currentUserName && (
      <div className="flex gap-1.5 xl:gap-2.5 items-center justify-between cursor-pointer text-sm">
        <img
          src={currentUserImage}
          alt="profile_img"
          className="w-8 xl:w-9 h-8 xl:h-9 aspect-square rounded-full"
        />
        <div className="flex flex-col flex-1">
          <p className="font-bold text-sm xl:text-base">
            {currentUserName}
            <img
              src={assets.green_dot}
              alt="active"
              className="inline-block w-4 h-4 object-contain ml-2 mb-0.5"
            />
          </p>
          <span className="font-semibold text-gray-400 text-xs">Available</span>
        </div>

        <div className="bg-gray-100 p-1.5 rounded-full custom-transition hover:bg-gray-300 relative group">
          <HiDotsHorizontal size={18} />
          {/* sub-menu */}
          <div className="group-hover:block hidden absolute top-7 right-0 w-[130px] rounded-md bg-black overflow-hidden text-white text-sm font-normal">
            <div className="custom-transition hover:bg-gray-300 hover:text-black">
              <button
                onClick={handleLogout}
                className="cursor-pointer px-3 py-2 flex items-center gap-2"
              >
                <BiPowerOff />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Owner;
