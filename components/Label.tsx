import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import styles from "../styles/components/label.module.scss";

const Label = (): JSX.Element => {
  return (
    <div className={styles.label}>
      <p>
        <span>Evaluare dosar medical fără costuri.</span>

        <Link href="/prices" passHref>
          <a className={styles.link}>
            <span>Află mai multe</span>
            <IoIosArrowForward />
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Label;