
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait for React to render the new route.
    const timeout = setTimeout(() => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
        return;
      }

      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (!element) {
        console.warn(`Element with id="${id}" not found`);
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}