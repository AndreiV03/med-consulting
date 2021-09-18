import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import styles from "../styles/components/Label.module.scss";

const Label = (): JSX.Element => {
  return (
    <div className={styles.label}>
      <div>
        Care whenever you need it, in person or in your PJs.

          <Link href="/" passHref>
            <a className={styles.link}>
              <span>Learn more</span>
              <RiArrowRightSLine />
            </a>
          </Link>
      </div>
    </div>
  );
}

export default Label;