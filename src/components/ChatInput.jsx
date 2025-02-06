/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import Input from "./Input";
import Picker from "emoji-picker-react";

const ChatInput = ({ handleSendMsg }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <>
      <div
        className="flex items-center gap-1 lg:gap-2.5 custom-card-padding bg-white max-w-full overflow-hidden
        right-0 border-t border-t-gray-300 rounded-b-md mb-6 xl:mb-8"
      >
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image" className="cursor-pointer">
          <div className="bg-gray-100 p-1.5 rounded-full custom-transition hover:bg-gray-300">
            <AiOutlinePaperClip size={18} />
          </div>
        </label>
        <div className="bg-gray-100 p-1.5 rounded-full custom-transition hover:bg-gray-300 cursor-pointer">
          <HiOutlineEmojiHappy size={18} onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>

        <form className="flex flex-1" onSubmit={(e)=>sendChat(e)}>
          <Input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border-none focus:outline-none placeholder:font-medium text-sm p-1"
          />
          <button
            type="submit"
            className="bg-black p-2 rounded-full lg:ml-3 custom-transition hover:bg-gray-700 cursor-pointer"
          >
            <BsSend size={16} className="text-white mr-[1px]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatInput;
