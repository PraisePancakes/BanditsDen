import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Services/Auth/AuthServices";

const Signup = () => {
  const DEFAULT_FORM = {
    username: "",
    password: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    register(form)
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => setError(error.response.data.message));
    setForm(DEFAULT_FORM);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div className="REGISTER__CONTAINER   ">
      <h1 className="text-3xl mt-10 text-center font-thin ">
        REGISTER YOUR ACCOUNT
      </h1>
      {error && (
        <div className="flex flex-col items-center mx-10 mt-5">
          <p className="pb-1 px-2 lg:w-[30rem] sm:w-[25rem] h-10 w-[20rem] text-xl text-center border-2 outline-none border-red-400 text-red-500 mb-2">
            {error}
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="Register--form-box flex flex-col font-thin gap-5 justify-center items-center mt-5 mb-10"
      >
        <label className="text-xl">ENTER YOUR USERNAME : </label>
        <input
          type="username"
          name="username"
          value={form.username}
          required
          onChange={handleChange}
          className="focus:outline-none px-5 py-[2px] w-[20rem] text-black "
          placeholder="JohnSmith09"
        ></input>
        <label className="text-xl">ENTER YOUR PASSWORD : </label>
        <input
          type="password"
          name="password"
          value={form.password}
          required
          onChange={handleChange}
          className="focus:outline-none px-5 py-[2px] w-[20rem] text-black  "
        ></input>
        <button
          type="submit"
          className="text-lg   border-[1px] hover:bg-red-900 transition-colors duration-500 w-[20rem] p-[.3rem]"
        >
          REGISTER
        </button>
        <h3 className="mb-[15rem]">
          Already have an existing account?{" "}
          <Link to="/auth/login">
            <button className="underline underline-offset-3">Log-in</button>{" "}
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default Signup;
