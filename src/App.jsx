import {
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home";
import Chat from "./pages/Chat";
import SetAvatar from "./pages/SetAvatar";
import Container from "./components/Container";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />

        {/* Main layout with sidebar (HomePage) */}
        <Route path="/" element={<HomePage />}>
          <Route
            index
            element={
              <Container>
                <h1>HomePage</h1>
              </Container>
            }
          />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
