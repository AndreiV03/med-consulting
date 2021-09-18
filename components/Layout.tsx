import { useState, ReactNode } from "react";

import styles from "../styles/components/Layout.module.scss";
import Label from "./Label";
import Header from "./Header";
import Menu from "./Menu";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <>
      <Label />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={styles.page}>{children}</div>
    </>
  );
}

export default Layout;