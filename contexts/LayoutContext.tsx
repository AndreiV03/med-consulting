import { useRouter } from "next/router";
import React, { createContext, useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";

interface ProviderStateInterface {
  isMenuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isHeaderWhite: boolean;
  scrollY: number;
};

export const LayoutContext = createContext<ProviderStateInterface>({} as ProviderStateInterface);

const LayoutContextProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHeaderWhite, setIsHeaderWhite] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    isMenuOpen && setIsMenuOpen(false);

    if (router.asPath === "/about-us" || router.asPath === "/services" || router.asPath === "/hospitals" || router.asPath === "/contact")
      setIsHeaderWhite(true);
    else setIsHeaderWhite(false);
  }, [router.asPath]);
  
  const state: ProviderStateInterface = {
    isMenuOpen: [isMenuOpen, setIsMenuOpen],
    isHeaderWhite,
    scrollY: useScroll().scrollY
  };

  return (
    <LayoutContext.Provider value={state}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;