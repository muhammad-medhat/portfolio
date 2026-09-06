import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    const contentDiv = document.getElementById("main");
    if (contentDiv) {
      contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return handleNavigation;
};
