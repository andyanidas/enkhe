import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthCtx";
import { useUser } from "../contexts/UserCtx";
import { services } from "../service/fetchService";
import { ToastContainer, toast } from "react-toastify";
import "../styles/login.scss";

export default function Login() {
  const [view, setView] = useState("login");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useUser();
  const { login, logout } = useAuth();

  function loginHandler(e) {
    e.preventDefault();
    services
      .loginService({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      })
      .then((e) => e.json())
      .then((e) => {
        if (e.success) {
          console.log(e);
          login({ username: e.username, email: e.email });
        }
      });
  }

  function registerHandler(e) {
    e.preventDefault();
    services
      .registerService({
        email: e.target.elements.email.value,
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      })
      .then(async (res) => {
        console.log(res);
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`${text}`);
        } else {
          return res.json();
        }
      })
      .then((e) => {
        toast("Account Creted");
      })
      .catch((e) => {
        toast(e.message);
      });
  }
  function resetHandler(e) {
    e.preventDefault();
    console.log("email = ", e.target.elements.email.value);
  }
  switch (view) {
    case "login":
      return (
        <div className="login">
          <form onSubmit={loginHandler}>
            {!user ? <h2>Login</h2> : <h2>Welcome You Have Logged In</h2>}

            <fieldset>
              {/* <legend>Log In</legend> */}
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required name="username" />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    required
                    name="password"
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => setView("PWReset")}>Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button type="submit">Login</button>
            <button type="button" onClick={() => setView("register")}>
              Create an Account
            </button>
          </form>
        </div>
      );
    case "register":
      return (
        <div className="login">
          <form onSubmit={registerHandler}>
            <h2>Sign Up!</h2>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <fieldset>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required name="email" />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setView("login")}>
              I Already Have an Account
            </button>
          </form>
        </div>
      );
    case "PWReset":
      return (
        <div className="login">
          <form onSubmit={resetHandler}>
            <h2>Reset Password</h2>
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required name="email" />
                </li>
              </ul>
            </fieldset>
            <button type="submit">Reset</button>
            <button type="button" onClick={() => setView("login")}>
              Go Back
            </button>
          </form>
        </div>
      );
    default:
      return <></>;
  }
}
