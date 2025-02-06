/* eslint-disable react/prop-types */

const Friends = ({ showMessage, selected, avatarImage, userName, handleChatChange,changeCurrentChat,onClick}) => {
  return (
    <div
    onClick={onClick}
      className={`custom-transition hover:bg-gray-200 ${selected && "bg-gray-200"}`}
    >
      <div className="custom-card-padding flex gap-1.5 xl:gap-2.5 items-center justify-between cursor-pointer text-sm">
        <img
          src={avatarImage}
          alt="profile_img"
          className="w-8 xl:w-9 h-8 xl:h-9 aspect-square rounded-full"
        />
        <div className="flex flex-col flex-1">
          <p className="font-semibold text-sm xl:text-base max-w-32 truncate">
            {userName}
          </p>
          <span className="font-medium text-gray-500 text-xs xl:text-sm w-24 xl:w-28 truncate">
            Hey! there I&apos;m using chat app
          </span>
        </div>
        <div className="text-gray-400 font-semibold flex flex-col items-end gap-0.5">
          <div className="text-[10px] xl:text-[11px] truncate">12:20 pm</div>
          {showMessage && (
            <div className="bg-yellow-400 h-[17px] w-[17px] rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white">7</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
