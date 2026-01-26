import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const scrollTo = params.get("scroll");
    const target = scrollTo ? `#${scrollTo}` : hash;

    const scrollNow = (selector) => {
      const el = selector ? document.querySelector(selector) : null;
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return true;
      }
      return false;
    };

    if (target) {
      requestAnimationFrame(() => {
        if (scrollNow(target)) return;
        requestAnimationFrame(() => {
          if (scrollNow(target)) return;
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}
