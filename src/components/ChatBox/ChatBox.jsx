/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getAllMessagesRoute, sendMessageRoute } from "../../utils/APIRoutes";
import GrayIcon from "../GrayIcon";
import ChatInput from "../ChatInput";
import assets from "../../assets/assets";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { TbVideo } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

const ChatBox = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.post(getAllMessagesRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieved", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <>
      {currentChat && (
        <div className="border-2 rounded-md relative lg:h-[calc(100vh-3rem)]">
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* top */}
              <div className="flex gap-2 xl:gap-2.5 items-center justify-between border-b border-gray-300 custom-card-padding">
                <div className="relative">
                  <img
                    src={
                      currentChat.avatarImage
                        ? currentChat.avatarImage
                        : assets.profile_img
                    }
                    alt="profile_img"
                    className="min-w-9 h-9 aspect-square rounded-full"
                  />
                  <img
                    src={assets.green_dot}
                    alt="active"
                    className="inline-block w-4 h-4 object-contain ml-2 mb-0.5 absolute -top-[2px] -right-[5px]"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-bold text-sm xl:text-base max-w-32 truncate">
                    {currentChat.username}
                  </p>
                  <span className="font-semibold text-gray-400 text-xs">
                    Active now
                  </span>
                </div>

                <GrayIcon Icon={FiPhone} />
                <GrayIcon Icon={TbVideo} />
                <GrayIcon Icon={HiDotsHorizontal} />
              </div>

              {/* middle */}

              <div className="custom-card-padding scroll">
                <div className="max-h-[60vh] overflow-y-auto flex flex-col">
                  {/* messages */}
                  {messages.map((message) => {
                    return (
                      <div
                        key={uuidv4()}
                        ref={scrollRef}
                        className={`flex justify-end gap-3 mb-2 ${message.fromSelf ? "" : "flex-row-reverse"}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          <p
                            className={`${message.fromSelf ? "bg-gray-300" : "bg-gray-100"} py-2 px-2.5 max-h-36 md:max-w-80 xl:max-w-72 text-sm rounded-md`}
                          >
                            {message.message}
                          </p>
                          <p className="text-xs text-gray-400 font-semibold">
                            12:20
                          </p>
                        </div>
                        <div className="text-center">
                          <img
                            src={`${message.fromSelf ? (currentUser.avatarImage ? currentUser.avatarImage : assets.profile_img) : currentChat.avatarImage ? currentChat.avatarImage : assets.profile_img}`}
                            alt="profile_img"
                            className="w-9 aspect-square rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}

                  {/* sender-img */}
                  {/* <div className="flex justify-end gap-3 mb-3 xl:mb-5">
                    <div className="flex flex-col gap-1.5">
                      <img
                        src={assets.pic1}
                        alt="image"
                        className="max-w-48 xl:max-w-72 rounded-md"
                      />
                      <p className="text-xs text-gray-400 font-semibold">
                        2:30 pm
                      </p>
                    </div>
                    <div className="text-center">
                      <img
                        src={
                          currentUser.avatarImage
                            ? currentUser.avatarImage
                            : assets.profile_img
                        }
                        alt="profile_img"
                        className="w-9 aspect-square rounded-full"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* buttom */}
            <ChatInput handleSendMsg={handleSendMsg} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
