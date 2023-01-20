import { createContext } from "react";
export const MyC = createContext(null)

const MyContext = ({ children }) => {


    return <MyC.Provider value={{}}>
        {children}
    </MyC.Provider>
}

export default MyContext