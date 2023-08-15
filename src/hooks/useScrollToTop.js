import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function scrollToTopSmooth() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopSmooth();
  }, [pathname]);

  useEffect(() => {
    const handleScrollToTop = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);
  return showButton;
}
