import styles from "../styles/components/label.module.scss";
import Link from "./Link";

const Label: React.FC = () => {
  return (
    <div className={styles.label}>
      <div className={styles.container}>
        <span>Evaluare dosar medical fără costuri.</span>
        <Link href="/" className={styles.link}>Află mai multe!</Link>
      </div>
    </div>
  );
}

export default Label;