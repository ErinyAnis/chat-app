import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loader from "../assets/loader.svg";
import { toast } from "react-toastify";
import axios from "axios";
import Container from "../components/Container";
import { setAvatarRoute } from "../utils/APIRoutes";

const SetAvatar = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      }
    };

    checkUser();
  }, [navigate]);

  const setProfilePicture = async () => {
    if (selectedAvatar === null) {
      toast.error("Please select an avatar");
    } else {
      const user = await JSON.parse(localStorage.getItem("chat-app-user"));
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-app-user", JSON.stringify(user));
        const updatedUser = JSON.parse(localStorage.getItem("chat-app-user"));
        if (updatedUser) {
          navigate("/chat");
        }
      } else {
        toast.error("Error setting avatar, Please try again");
      }
    }
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=4"
        );
        const avatars = response.data.results.map(
          (user) => user.picture.medium
        );
        setAvatars(avatars);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []);

  return isLoading ? (
    <div className="flex items-center justify-center min-h-screen">
      <img src={loader} alt="loader" className="max-w-32 md:max-w-44" />
    </div>
  ) : (
    <Container className="flex justify-center items-center flex-col gap-6 min-h-screen">
      <div className="text-lg font-bold lg:text-2xl">
        <h1>Pick an avatar as your profile picture</h1>
      </div>
      <div className="flex gap-5">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`border-4 rounded-full overflow-hidden p-1 cursor-pointer ${selectedAvatar === index ? "border-blue-700" : "border-transparent"}`}
          >
            <img
              src={avatar}
              alt="avatar"
              onClick={() => setSelectedAvatar(index)}
              className="h-20 object-cover object-top rounded-full"
            />
          </div>
        ))}
      </div>
      <button
        className="p-2 bg-[#077eff] custom-transition hover:bg-[#194d85] text-white border-none rounded-md"
        onClick={setProfilePicture}
      >
        Set as Profile Picture
      </button>
    </Container>
  );
};

export default SetAvatar;
