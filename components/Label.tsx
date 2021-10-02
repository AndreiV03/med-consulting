import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import styles from "../styles/components/label.module.scss";

const Label = (): JSX.Element => {
  return (
    <div className={styles.label}>
      <div>
        Evaluare dosar medical fără costuri.

        <Link href="/" passHref>
          <a className={styles.link}>
            <span>Află mai multe</span>
            <RiArrowRightSLine />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Label;