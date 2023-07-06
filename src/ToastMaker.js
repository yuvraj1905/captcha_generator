import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastMaker = (type, message) => {
  return toast[type](`${message}`, {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
