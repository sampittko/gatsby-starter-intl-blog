import { useEffect } from "react";
import { useLocalStorage } from "beautiful-react-hooks";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(
    "dark-mode",
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    window.matchMedia &&
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          const value = e.matches;
          setDarkMode(value);
          if (value) {
            document.documentElement.classList.add("mode-dark");
          } else {
            document.documentElement.classList.remove("mode-dark");
          }
        });
  });

  return darkMode;
};

export default useDarkMode;
