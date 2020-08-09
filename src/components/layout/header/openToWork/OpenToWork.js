import React from "react";
import { useSessionStorage } from "beautiful-react-hooks";
import Message from "./Message";
import Close from "./Close";

const OpenToWork = () => {
  const [visible, setVisible] = useSessionStorage("show-work-status", true);

  const onClick = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  return visible ? (
    <div className="h-8">
      <div className="absolute top-0 left-0 w-screen h-8 bg-green dark:bg-dark-green text-white text-center text-xs">
        <Message />
        <Close onClick={(e) => onClick(e)} />
      </div>
    </div>
  ) : null;
};

export default OpenToWork;
