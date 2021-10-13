import type { NextPage } from "next";

import styles from "../styles/pages/contact.module.scss";

const Contact: NextPage = () => {
  return (
    <>
      <div className={styles.hero_section}>
        <h4 className={styles.subtitle}>Contact</h4>
        <h1 className={styles.title}>Intră în legătură</h1>
      </div>

      <div className={styles.content}>
        <h2>We're here to help</h2>
        <div className={styles.container}>
          <h3>Already a member?</h3>
          <p>The fastest way to get care and answers to your questions is through our app (iPhone or Android) or website.</p>
        </div>
        <div className={styles.container}>
          <h4>Lab hours</h4>
          <p>We update the app and website daily with the latest hours.</p>
        </div>
        <div className={styles.container}>
          <h4>Care for health concerns</h4>
          <p>You can use the app or website to book, cancel, and reschedule In-Office or Remote Visits as well as send messages to your provider. You can also get 24/7 on-demand care with Video Chat in the app.</p>
        </div>
        <div className={styles.container}>
          <h4>Billing help</h4>
          <p>Have a billing question? Just send our admin team a message through the app or website and we’ll get back to you as quickly as possible. Don’t worry if your payment due date is coming up — you won’t be marked late while we work to resolve your concern.</p>
        </div>
        <div className={styles.container}>
          <h4>Technical issues</h4>
          <p>Having trouble with the One Medical app or your online account? Please email our team at techsupport@onemedical.com.</p>
        </div>
        <div className={styles.container}>
          <h3>Not a member yet?</h3>
          <p>We’re always here to help. Just give us a call at 1-888-ONEMED1 (1-888-663-6331) or drop us a line at feedback@onemedical.com and we’ll take care of you.</p>
        </div>

        <h2>Contact information</h2>
        <div className={styles.container}>
          <h3>Office Headquarters</h3>
        </div>
        <div className={styles.container}>
          <h4>San Francisco, West Coast Headquarters</h4>
          <p>One Embarcadero Center</p>
          <p>Suite 1900</p>
          <p>San Francisco, CA 94111</p>
        </div>
        <div className={styles.container}>
          <h4>New York City, East Coast Headquarters</h4>
          <p>129 West 29th Street</p>
          <p>New York, NY 10001</p>
        </div>
      </div>
    </>
  );
}

export default Contact;