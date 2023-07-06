import React, { useEffect, useState } from "react";
import { captchaGenerator } from "./captchaGenerator";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { toastMaker } from "./ToastMaker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpComponent = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [requiredCaptcha, setRequiredCaptcha] = useState("");
  const [refreshCaptcha, setRefreshCaptcha] = useState(false);
  const [lightMode, changeLightMode] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    requiredCaptcha === inputCaptcha
      ? toastMaker("success", "Sign up Successfull")
      : toastMaker("error", "Invalid captcha, try again!");
  };

  useEffect(() => {
    const newCaptcha = captchaGenerator();
    setRequiredCaptcha(newCaptcha);
  }, [refreshCaptcha]);
  return (
    <div className={lightMode ? "signup__page" : "signup__page darkMode"}>
      <h2>Sign Up</h2>
      <span
        className="mode__Switcher__Span"
        onClick={() => changeLightMode(!lightMode)}
      >
        {lightMode ? <MdDarkMode size={18} /> : <MdLightMode size={18} />}
      </span>
      <form onSubmit={formSubmitHandler} className="signup__form">
        <span>
          <label htmlFor="name">Name</label>
          <input
            required
            autoComplete="off"
            type="text"
            id="name"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <input
            required
            autoComplete="off"
            id="email"
            type="text"
            placeholder="Enter email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </span>
        <span style={{ position: "relative" }}>
          <label htmlFor="password">Password</label>
          <input
            required
            autoComplete="off"
            placeholder="Enter password"
            id="password"
            type={hidePassword ? "password" : "text"}
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <section
            onClick={() => setHidePassword(!hidePassword)}
            className="show__Hide__Pass"
          >
            {hidePassword ? <BiSolidShow /> : <BiSolidHide />}
          </section>{" "}
        </span>

        <span>
          <label htmlFor="captcha">Captcha</label>
          <section className="captchaSection">
            <p>{requiredCaptcha}</p>
            <input
              required
              autoComplete="off"
              placeholder="Enter captcha"
              id="captcha"
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
          </section>
        </span>

        <button
          className={
            lightMode ? "refresh__captcha" : "refresh__captcha darkModeBtn"
          }
          type="button"
          onClick={() => setRefreshCaptcha(!refreshCaptcha)}
        >
          Refresh captcha
        </button>
        <button className={lightMode ? "" : "darkModeBtn"} type="submit">
          SUBMIT
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignUpComponent;
