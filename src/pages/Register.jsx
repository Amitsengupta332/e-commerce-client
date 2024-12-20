import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishList = [];
    const userData = {
      email,
      role,
      status,
      wishList,
    };
    console.log(userData);

    // Password validation regex
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordValidation.test(data.password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters long, include uppercase and lowercase letters, at least one number, and one special character.",
      });
      return;
    }

    CreateUser(data.email, data.password)
      .then(() => {
        axios.post("http://localhost:4000/users", userData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-light">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  validate: (value) => {
                    const passwordValidation =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    return (
                      passwordValidation.test(value) ||
                      "Password must be at least 8 characters long, include uppercase and lowercase letters, at least one number, and one special character."
                    );
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm font-light">
                  {errors.password.message || "Password is required"}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-light">
                  {errors.confirmPassword.message ||
                    "Confirm password is required"}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm font-light">
                  Role selection is required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <GoogleLogin />
            <p className="my-4 text-sm font-light">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
