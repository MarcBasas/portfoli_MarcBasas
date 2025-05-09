import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    console.log(window.scrollY);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
