import { useState, ReactNode } from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/components/layout.module.scss";
import Label from "./Label";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <>
      <Helmet>
        <body className={isMenuOpen ? styles.menu_active : ""} />
      </Helmet>

      <Label />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={styles.page}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;