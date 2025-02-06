/* eslint-disable react/prop-types */
import assets from "../assets/assets";

const Welcome = ({ currentUser }) => {

  return (
    <div className="border-2 rounded-md relative lg:h-[calc(100vh-3rem)]">
      <div className="custom-card-padding flex justify-center items-center flex-col h-full">
        <img src={assets.logo_icon} alt="logo" className="w-32 lg:w-48 object-contain mb-3" />
        <h1 className="font-bold text-lg lg:text-2xl mb-1">
          welcome, <span className="text-blue-600">{currentUser.username ? currentUser.username : "user"}!</span>
        </h1>
        <h3 className="font-medium text-gray-600">Please select a chat to start messaging</h3>
      </div>
    </div>
  );
};

export default Welcome;
