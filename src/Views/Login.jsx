import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../api/user";
import Input from "../Components/Input";
import OnBoarding from "../Components/OnBoarding";

const Login = () => {
  const navigte = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <OnBoarding
      left={
        <>
          <p className="text-[#35424B]">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigte("/register");
              }}
              className="text-black font-semibold cursor-pointer"
            >
              Sign Up
            </span>
          </p>
          <div className="flex flex-1 mt-[4.2rem] justify-center flex-col gap-[2.5rem]">
            <h2 className="text-3xl font-bold">Login</h2>
            <div className="flex flex-col gap-6 w-full">
              <Input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="example@email.com"
                label="Email Address"
              />
              <Input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="8+ strong character"
                label="Password"
              />
            </div>
            <button
              className="py-3 text-white bg-[#248489] rounded-md"
              onClick={async () => {
                await UserApi()
                  .login(user)
                  .then((res) => {
                    console.log(res);
                    localStorage.setItem("token", res.token);
                    navigte("/home");
                  })
                  .catch((err) => console.error(err));
              }}
            >
              Login
            </button>
          </div>
        </>
      }
      right={
        <>
          <h1 className="text-white font-bold text-[3rem]">
            Welcome Back <br className="hidden lg:block" />
            to Nework
          </h1>
          <p className="text-white">
            Let's get you all set up so you can verify your personal
            <br className="hidden lg:block" />
            account and begin setting up your profile
          </p>
        </>
      }
    />
  );
};

export default Login;
