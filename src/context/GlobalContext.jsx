import React, {createContext , useState} from "react"

export const GlobalContext = createContext(); 

export function GlobalProvider({children}){
    const [loginInfo, setLoginInfo] = useState(""); 

    return(
        <GlobalContext.Provider value={[loginInfo, setLoginInfo]}>
            {children}
        </GlobalContext.Provider>
    )
}