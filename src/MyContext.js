import { createContext, useState } from "react";
export const MyC = createContext(null);

const MyContext = ({ children }) => {
  const [show, setShow] = useState(false);

  const [currentCountry, setCurrentCountry] = useState();

  return (
    <MyC.Provider value={{ show, setShow, currentCountry, setCurrentCountry }}>
      {children}
    </MyC.Provider>
  );
};

export default MyContext;
