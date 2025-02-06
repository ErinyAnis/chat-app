import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import Container from "../components/Container";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(()=> {
    if(localStorage.getItem("chat-app-user")) {
      navigate("/")
    }
  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg);
        return false;
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }
      navigate("/");
    }
  };

  const handleValidation = () => {
    const { username, password } = values;
    if (username.length === 0) {
      toast.error("Email and password is required");
      return false;
    } else if (password.length === 0) {
      toast.error("Email and password is required");
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Container
        className="min-h-screen bg-[url('/background.png')] bg-no-repeat bg-cover flex-col md:flex-row flex items-center
      md:justify-evenly justify-center gap-5 md:gap-0"
      >
        <img
          src={assets.logo_big}
          alt="logo"
          className="w-[max(18vw,150px)] md:w-[max(20vw,200px)]"
        />
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="bg-white py-6 px-7 flex flex-col gap-4 rounded-md min-w-[60vw] md:min-w-[35vw]"
        >
          <Input
            type="text"
            placeholder="UserName"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="p-2 bg-[#077eff] custom-transition hover:bg-[#194d85]  text-white border-none rounded-[4px]"
          >
            Login In
          </button>
          <span className="text-sm text-gray-600 font-semibold">
            Don&apos;t have an account?
            <span className="font-medium text-gray-400 cursor-pointer hover:text-[#077eff] custom-transition ml-1">
              <Link to="/register">Register</Link>
            </span>
          </span>
        </form>
      </Container>
    </>
  );
};

export default Login;
