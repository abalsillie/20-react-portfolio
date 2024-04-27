import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Please feel welcome to reach out for collaboration!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("emailIcon.png")} alt="Email icon" />
          <a>abalsillie1@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/alex-balsillie-257908199/">linkedin.com/in/alex-balsillie-257908199/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/abalsillie">github.com/abalsillie</a>
        </li>
      </ul>
    </footer>
  );
};
