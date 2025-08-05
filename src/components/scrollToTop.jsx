import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // Use "smooth" if you want animation
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop