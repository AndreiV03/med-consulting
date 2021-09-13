import { useState, ReactNode } from "react";

import styles from "../styles/components/layout.module.scss";
import Header from "./Header";
import Menu from "./Menu";

type Props = {
  children: ReactNode
};

const Layout = ({ children }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
      <div className={styles.page}>{children}</div>
    </>
  );
}

export default Layout;