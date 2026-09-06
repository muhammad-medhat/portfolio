import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleNavigation = (path) => {
  navigate(path);
  const contentDiv = document.getElementById("main");
  if (contentDiv) {
    contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
export { handleNavigation };
