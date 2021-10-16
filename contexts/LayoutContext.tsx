import React, { createContext, useState } from "react";
import useScroll from "../hooks/useScroll";

interface ProviderStateInterface {
  isMenuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  scrollY: number;
};

export const LayoutContext = createContext<ProviderStateInterface>({} as ProviderStateInterface);

const LayoutContextProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const state: ProviderStateInterface = {
    isMenuOpen: [isMenuOpen, setIsMenuOpen],
    scrollY: useScroll().scrollY
  };

  return (
    <LayoutContext.Provider value={state}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;