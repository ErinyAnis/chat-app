/* eslint-disable react/prop-types */
const GrayIcon = ({Icon}) => {
  return (
    <div className="bg-gray-100 p-1.5 rounded-full custom-transition hover:bg-gray-300 cursor-pointer">
      <Icon size={18} />
    </div>
  );
};

export default GrayIcon;
