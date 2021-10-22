import LayoutContextProvider from "../contexts/LayoutContext";

import styles from "../styles/components/layout.module.scss";
import HelmetComponent from "./Helmet";
import Label from "./Label";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContextProvider>
      <HelmetComponent />
      <Label />
      <Header />
      <Menu />
      <div className={styles.page}>{children}</div>
      <Footer />
    </LayoutContextProvider>
  );
}

export default Layout;