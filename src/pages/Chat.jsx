import { useEffect, useState, useRef } from "react";
import ChatBox from "../components/ChatBox/ChatBox";
import ChatLeftSidebar from "../components/ChatLeftSidebar/ChatLeftSidebar";
import ChatRightSideBar from "../components/ChatRightSideBar/ChatRightSideBar";
import Container from "../components/Container";
import Welcome from "../components/Welcome";
// import { host } from "../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const Chat = () => {
  const socket = useRef(null);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentSelected, setCurrentSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
        setIsLoading(false);
      }
    };
    checkUser();
  }, []);

  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io("https://chat-app-backend-gilt.vercel.app", { transports: ["websocket"] });
      socket.current.emit("add-user", currentUser._id);

      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [currentUser]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("connect", () => console.log("Connected to server!"));
      socket.current.on("disconnect", () => console.log("Disconnected!"));
      socket.current.on("connect_error", (err) =>
        console.error("Connection Error:", err)
      );
    }
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    setCurrentChat(contact);
  };

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return !isLoading ? (
    <div className="min-h-screen">
      <Container className="lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] w-full pb-0 mb-1 lg:gap-5">
        <div>
          <ChatLeftSidebar
            currentSelected={currentSelected}
            handleChatChange={handleChatChange}
            changeCurrentChat={changeCurrentChat}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </div>
        <div className="my-5 lg:my-0">
          {currentChat === null ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatBox
              currentChat={currentChat}
              currentUser={currentUser}
              socket={socket}
            />
          )}
        </div>
        {currentChat && (
          <div className="col-span-2 xl:col-span-1">
            <ChatRightSideBar currentChat={currentChat} />
          </div>
        )}
      </Container>
    </div>
  ) : (
    <Container>Loading...</Container>
  );
};

export default Chat;
