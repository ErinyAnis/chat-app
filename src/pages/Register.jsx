import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import Container from "../components/Container";

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg);
        return;
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }
      navigate("/");
    }
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (username.length < 3) {
      toast.error("Username should be greater than 3 characters");
      return false;
    } else if (!email || email.trim() === "") {
      toast.error("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be equal or greater than 8 characters");
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Password and confirm password should be the same");
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
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="p-2 bg-[#077eff] custom-transition hover:bg-[#194d85]  text-white border-none rounded-[4px]"
          >
            Create User
          </button>
          <span className="text-sm text-gray-600 font-semibold">
            Already have an account?{" "}
            <span className="font-medium text-gray-400 cursor-pointer hover:text-[#077eff] custom-transition ml-0.5">
              <Link to="/login">Login</Link>
            </span>
          </span>
        </form>
      </Container>
    </>
  );
};

export default Register;
