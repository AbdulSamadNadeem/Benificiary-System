import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createSeeker, signin, signup } from "../../API/Routehandlers";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Form = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = "admin@gmail.com";
  const pass = "admin123";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      switch (type) {
        case "register":
          const response = await createSeeker("/createseeker", data, dispatch);
          if (response.status === 201) {
            toast.success("Registered");
            setTimeout(() => {
              navigate("/saylani/coupon");
            }, 2000);
          } else {
            toast.error("Something Went Wrong");
          }
          break;

        case "signup":
          const user = await signup("/auth/signup", data);
          if (user?.status === 201) {
            toast.success("Signup");
            setTimeout(() => {
              navigate("/saylani/signin");
            }, 2000);
          } else {
            toast.error("Something Went Wrong");
          }
          break;

        case "signin":
          const logedinuser = await signin("/auth/signin", data);
          if (logedinuser?.status === 200) {
            toast.success("LogedIn");
            setTimeout(() => {
              navigate("/saylani/reception");
            }, 2000);
          } else {
            toast.error("Something Went Wrong");
          }
          break;
        case "admin":
          console.log(data?.email, data?.password);
          if (data?.email === email && data?.password === pass) {
            localStorage.setItem(
              "token",
              Math.floor(Math.random() + 50023 * 24324)
            );
            toast.success("Signup");
            setTimeout(() => {
              navigate("/saylani/dashboard");
            }, 2000);
          } else {
            toast.error("Something Went Wrong");
          }
          break;
      }
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const forms = useRef(null);
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(container.current, {
      y: -100,
      opacity: 0,
      duration: 0.6,
      delay: 3,
    }),
      tl.from(text1.current, {
        opacity: 0,
        duration: 0.4,
      }),
      tl.from(text2.current, {
        opacity: 0,
        duration: 0.4,
      }),
      tl.from(forms.current, {
        opacity: 0,
        duration: 0.5,
      });
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div ref={container} className="">
        <div className="flex flex-col gap-4 ">
          <h1
            ref={text1}
            className="text-3xl font-medium text-[#262626] text-center"
          >
            {type === "register" ? "Registration Form" : "Welcome To"}
            <span className="text-[#8DC63F] underline">
              {type === "register" ? "" : "Saylani"}
            </span>
          </h1>
          <h1
            ref={text2}
            className="text-3xl font-medium text-[#0D6DB7] text-center"
          >
            {type === "register"
              ? "Registration"
              : type === "signin"
              ? "Signin"
              : type === "admin"
              ? "Admin Signin"
              : "Signup"}
          </h1>
        </div>
        <form
          ref={forms}
          className={`${
            type === "register"
              ? "flex flex-wrap gap-20 justify-center items-center"
              : "flex flex-col gap-10 items-center p-4"
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          {(type === "signin" ||
            "signup" ||
            type === "register" ||
            type === "admin") && (
            <>
              <input
                className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4;
    } ${errors.email || errors.name ? "border-red-800" : ""}`}
                type={type === "register" ? "text" : "email"}
                placeholder={
                  type === "register" ? "Enter Seeker Name" : "Enter Email"
                }
                {...register(type === "register" ? "name" : "email", {
                  required: true,
                })}
              />

              <input
                type={type === "register" ? "text" : "password"}
                className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4;
    } ${errors.password || errors.cnic ? "border-red-800" : ""}`}
                placeholder={
                  type === "register" ? "Enter Seeker CNIC" : "Enter Password"
                }
                {...register(type === "register" ? "cnic" : "password", {
                  required: true,
                })}
              />
            </>
          )}
          {(type === "signup" || type === "register") && (
            <>
              <input
                type="text"
                className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4;
} ${errors.username || errors.address ? "border-red-800" : ""}`}
                placeholder={
                  type === "register"
                    ? "Enter Seeker Address"
                    : "Enter Username"
                }
                {...register(type === "register" ? "address" : "username", {
                  required: true,
                })}
              />
              <input
                type="phone"
                className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4;
} ${errors.phone ? "border-red-800" : ""}`}
                placeholder={
                  type === "register"
                    ? "Enter Seeker Phone"
                    : "Enter Your Phone"
                }
                {...register("phone", { required: true })}
              />
              {type === "register" && (
                <>
                  <select
                    name=""
                    id=""
                    className={`w-96 h-14 border border-[#8DC63F] rounded-md outline-none text-[#262626] ${
                      errors.city ? "border-red-800" : ""
                    }`}
                    {...register("city", { required: true })}
                  >
                    <option value="reception">karachi</option>
                    <option value="reception">Lahore</option>
                    <option value="reception">Islamabad</option>
                    <option value="reception">Peshawer</option>
                    <option value="reception">Quetta</option>
                    <option value="reception">Multan</option>
                  </select>
                </>
              )}
              {type === "register" && (
                <>
                  <select
                    name=""
                    id=""
                    className={`w-96 h-14 border border-[#8DC63F] rounded-md outline-none text-[#262626] ${
                      errors.condition ? "border-red-800" : ""
                    }`}
                    {...register("condition", { required: true })}
                  >
                    <option value="reception">Average</option>
                    <option value="reception">Poverty</option>
                    <option value="reception">Below Poverty</option>
                  </select>
                </>
              )}
              {type === "register" && (
                <>
                  <select
                    name=""
                    id=""
                    className={`w-96 h-14 border border-[#8DC63F] rounded-md outline-none text-[#262626] ${
                      errors.martial ? "border-red-800" : ""
                    }`}
                    {...register("martial", { required: true })}
                  >
                    <option value="reception">Married</option>
                    <option value="reception">Unmarried</option>
                  </select>
                </>
              )}
              {type === "register" && (
                <>
                  <select
                    name=""
                    id=""
                    className={`w-96 h-14 border border-[#8DC63F] rounded-md outline-none text-[#262626] ${
                      errors.purpose ? "border-red-800" : ""
                    }`}
                    {...register("purpose", { required: true })}
                  >
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="finance">Finance</option>
                    <option value="bills">Bills</option>
                    <option value="jobs">Jobs</option>
                    <option value="food">Food</option>
                  </select>
                </>
              )}
              {type === "register" && (
                <>
                  <input
                    type="date"
                    className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4;
} ${errors.dob ? "border-red-800" : ""}`}
                    placeholder="Enter Your Date Of Birth"
                    {...register("dob", {
                      required: true,
                    })}
                  />
                </>
              )}

              {type === "register" ? (
                <textarea
                  className={`w-96 h-14 bg-none border border-[#8DC63F] rounded-md outline-none text-xl font-light text-[#262626] p-4 overflow-y-hidden`}
                  placeholder="Enter Description If Any"
                  {...register("description")}
                ></textarea>
              ) : (
                <select
                  name=""
                  id=""
                  className={`w-96 h-14 border border-[#8DC63F] rounded-md outline-none text-[#262626] ${
                    errors.role ? "border-red-800" : ""
                  }`}
                  {...register("role", { required: true })}
                >
                  <option value="reception">Receptionist</option>
                </select>
              )}
              <div
                className={`${
                  type === "register" ? "absolute top-full mt-10" : ""
                }`}
              ></div>
            </>
          )}
          {type === "signup" ||
            (type === "signin" && (
              <NavLink
                to={"/saylani/adminlogin"}
                className={"text-center font-light text-xl text-blue-400"}
              >
                SignIn As Admin
              </NavLink>
            ))}
          <input
            type="submit"
            className={`${
              type === "register"
                ? "w-48 h-10 bg-[#8DC63F] text-xl font-normal text-white rounded-xl hover:scale-105 duration-200 cursor-pointer absolute top-180"
                : "w-48 h-10 bg-[#8DC63F] text-xl font-normal text-white rounded-xl hover:scale-105 duration-200 cursor-pointer "
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
