import { useEffect } from "react";
import { useLocalStorage } from "beautiful-react-hooks";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(
    "dark-mode",
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const set = value => {
    setDarkMode(value);
    if (value) {
      document.documentElement.classList.add("mode-dark");
    } else {
      document.documentElement.classList.remove("mode-dark");
    }
  }

  useEffect(() => {
    set(darkMode)
  })

  useEffect(() => {
    window.matchMedia &&
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          set(e.matches);
        });
  }, []);

  return darkMode;
};

export default useDarkMode;
