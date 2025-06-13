import React, { createContext, useContext, useState } from "react";

const TorchContext = createContext<{
  torchOn: boolean;
  setTorchOn: (v: boolean) => void;
}>({ torchOn: false, setTorchOn: () => {} });

export const useTorch = () => useContext(TorchContext);

export const TorchProvider = ({ children }: { children: React.ReactNode }) => {
  const [torchOn, setTorchOn] = useState(false);
  return (
    <TorchContext.Provider value={{ torchOn, setTorchOn }}>
      {children}
    </TorchContext.Provider>
  );
};