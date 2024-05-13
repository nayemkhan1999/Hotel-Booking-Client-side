import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BG from "../../assets/videoBg.mp4";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  // console.log(loginUser, "11 number line");
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((result) => {
      console.log(result);
    });
  };
  // social Provider navigate
  const handleSocialUser = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };

  return (
    <div className="hero ">
      <div className="mx-10">
        <video className="mx-auto rounded-t-md " src={BG} autoPlay loop muted />
      </div>
      <div className="hero-content  ">
        <div className="card shrink-0 w-96  text-white bg-gray-950 shadow-xl z-10 opacity-70 ">
          <img
            className="w-20 h-20 mx-auto"
            src="https://cdn-icons-png.flaticon.com/128/3168/3168643.png"
            alt=""
          />

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered text-black font-medium"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 opacity-70 text-xs text-left">
                  Please Enter Your Email
                </span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="">Password</span>
              </label>

              <input
                type={showIcon ? "text" : "password"}
                placeholder="password"
                className="input input-bordered text-black font-medium relative"
                {...register("password", { required: true })}
              />
              <span
                className="absolute top-[53px] right-[15px] text-black text-lg"
                onClick={() => setShowIcon(!showIcon)}
              >
                {showIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>

              {errors.password && (
                <span className="text-red-500 opacity-70 text-xs text-left">
                  Please Enter Your Password
                </span>
              )}
            </div>
            <div className="form-control mt-3">
              <button className="btn bg-[teal] text-white  border-none font-bold text-xl">
                Sing In
              </button>
            </div>
            <label className="opacity-60">
              <a href="#">Forgot password?</a>
            </label>

            <div className="flex flex-col w-full">
              <div className="divider divider-neutral">Or Login With</div>
            </div>
            <div className="flex items-center justify-between gap-2 ">
              {/* Another LInks */}

              <button
                onClick={() => handleSocialUser(googleLogin)}
                className="btn btn-active w-full text-sm opacity-90 text-black font-medium"
              >
                continue with
                <span className="text-3xl">
                  <FcGoogle />
                </span>
              </button>
            </div>

            <div className="text-center">
              <Link to="/register">
                <span> New to Hotel? </span>
                <span className="text-success  font-bold underline ">
                  Sign up now
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
