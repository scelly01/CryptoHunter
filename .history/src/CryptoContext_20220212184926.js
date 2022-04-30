import React, { useContext, useEffect } from 'react'

import { createContext} from "react";

const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useStste("INR");
  const [SYMBOL, setSymbol] = useStste("r");
  
  useEffect(() =>{
      if(currency ==="INR") setSymbol("r")
      else if(currency==="USD") setSymbol("$")
  }, [currency]);

  return (
    <Crypto.Provider>{children}</Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () =>{
    return useContext(Crypto);
}