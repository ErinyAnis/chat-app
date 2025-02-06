/* eslint-disable react/prop-types */
import Friends from "../Friends";
import Input from "../Input";
import { RiSearchLine } from "react-icons/ri";
import Owner from "../Owner";
import GrayIcon from "../GrayIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../../utils/APIRoutes";
import axios from "axios";
import assets from "../../assets/assets";

const ChatLeftSidebar = ({
  currentSelected,
  handleChatChange,
  changeCurrentChat,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contacts = async () => {
      if (currentUser) {
        try {
          if (currentUser.isAvatarImageSet) {
            const { data } = await axios.get(
              `${allUsersRoute}/${currentUser._id}`
            );
            setContacts(data || []);
          } else {
            navigate("/setAvatar");
          }
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      }
    };
    contacts();
  }, [currentUser]);

  return (
    <div className="scroll border-2 rounded-md overflow-auto lg:h-[calc(100vh-3rem)]">
      <div className="custom-card-padding">
        <Owner currentUser={currentUser} />
      </div>
      <div className="flex items-center gap-1 py-1.5 px-3 border-y border-gray-200">
        <GrayIcon Icon={RiSearchLine} />
        <Input
          type="text"
          placeholder="Search.."
          className="bg-transparent border-none outline-0 outline-none text-white text-sm lg:text-base
            focus:outline-none placeholder:text-gray-400 placeholder:font-medium px-2 max-w-[93%]"
        />
      </div>

      <div className="flex flex-col max-h-[55vh] overflow-y-auto">
        {Array.isArray(contacts) &&
          contacts.map((contact, index) => {
            const avatarImage = contact.avatarImage
              ? contact.avatarImage
              : assets.profile_img;
            return (
              <Friends
                key={index}
                selected={index === currentSelected}
                avatarImage={avatarImage}
                userName={contact.username}
                onClick={() => changeCurrentChat(index, contact)}
                changeChat={handleChatChange}
                changeCurrentChat={changeCurrentChat}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ChatLeftSidebar;
