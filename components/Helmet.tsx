import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";

import { LayoutContext } from "../contexts/LayoutContext";
import styles from "../styles/components/layout.module.scss";

const HelmetComponent: React.FC = () => {
  const { isMenuOpen: [isMenuOpen] } = useContext(LayoutContext);
  
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>MED Consulting</title>

        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="theme-color" content="#6633cc" />
        <meta name="canonical" content="" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="icon" href="favicon.ico" />

        <body className={isMenuOpen ? styles.menu_active : ""} />
      </Helmet>
    </HelmetProvider>
  );
}

export default HelmetComponent;