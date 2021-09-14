import type { NextPage } from "next";

import SectionOne from "../components/home/SectioOne";
import SectionTwo from "../components/home/SectionTwo";

const Home: NextPage = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
}

export default Home;