import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BG from "../../assets/videoBg.mp4";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, UserUpdateProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;

    if (!/[A-Z]/.test(password)) {
      return toast.error("you must have an one uppercase letter!");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("you must have an one LowerCase letter!");
    }

    if (password.length < 6) {
      return toast.error("Password must be 6 character!");
    }
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
        }
        UserUpdateProfile(name, photoURL).then(() => {
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Register Successful");
  };
  return (
    <div>
      <Helmet>
        <title>Hotel | Register Page</title>
      </Helmet>
      <div className="hero ">
        <div className="mx-10">
          <video
            className="mx-auto rounded-t-md "
            src={BG}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="hero-content ">
          <div className="card shrink-0 w-96  text-white  bg-gray-900 shadow-xl opacity-70  ">
            <h1 className="text-5xl font-bold mx-auto mt-2">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered  text-black font-medium"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 font-medium text-left text-xs">
                    Please Enter Your Name
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered  text-black font-medium"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-medium text-left text-xs">
                    Please Enter Your Email
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">photoURL</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered  text-black font-medium"
                  {...register("photoURL", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered  text-black font-medium relative"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-[430px] right-[50px] text-black text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                {errors.password && (
                  <span className="text-red-600 font-medium text-xs text-left">
                    Please Enter Your Password
                  </span>
                )}
              </div>
              {error && <small className="text-red-600">{error}</small>}
              <div className="form-control mt-6">
                <button className="btn bg-[teal] border-none text-white font-bold text-xl">
                  Register
                </button>
              </div>

              <div className="text-center">
                <Link to="/login">
                  <span className="text-base">Already a member </span>
                  <span className="text-success font-bold underline ">
                    Login now
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
