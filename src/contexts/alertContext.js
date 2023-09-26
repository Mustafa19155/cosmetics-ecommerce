"use client";
import { createContext, useState } from "react";

const ALERT_TIME = 5000;
const initialState = {
  text: "",
  type: "",
};

export const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export default function AlertProvider({ children }) {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

// export default AlertContext;
