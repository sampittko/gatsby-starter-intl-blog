import { useEffect } from "react";
import { useSessionStorage } from "beautiful-react-hooks";

const useDarkMode = (considerOS, initialValue) => {
  const [enabled, setEnabled] = useSessionStorage("dark-mode", null);

  const setDarkMode = (value) => {
    if (value) {
      document.documentElement.classList.add("mode-dark");
    } else {
      document.documentElement.classList.remove("mode-dark");
    }
    setEnabled(value);
  };

  useEffect(() => {
    // use existing value
    if (enabled !== null) {
      setDarkMode(enabled)
    }
    // was not yet set
    else {
      if (!!considerOS) {
        window.matchMedia &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
              setDarkMode(e.matches);
            });

        setDarkMode(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
      else {
        setDarkMode(!!initialValue)
      }
    }
  }, []);

  return [enabled === null ? false : enabled, setDarkMode]
};

export default useDarkMode;
