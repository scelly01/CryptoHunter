import React, { useContext, useEffect } from 'react'

import { createContext} from "react";

const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("r");
  
  useEffect(() =>{
      if(currency ==="INR") setSymbol("r")
      else if(currency==="USD") setSymbol("$")
  }, [currency]);

  return <Crypto.Provider value={{currency,symbol}}> {children} </Crypto.Provider>
}

export default CryptoContext

export const CryptoState = () =>{
    return useContext(Crypto);
}