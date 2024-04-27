import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("headshot.png")}
          alt="My headshot"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I am a student of Monash University's Coding Bootcamp, specialising in fullstack development.
                I have experience in building responsive and well-designed sites, as well as efficient backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Philanthropy Expert</h3>
              <p>
                I have been working in the Australian philanthropic sector for the past 5 years.
                I am passionate about revolutionising technology in philanthropy to service next-gen philanthropists and enable increased strategic giving.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Financal Technology Specialist</h3>
              <p>
                Currently completing my Masters in Financial Technology, I believe in the power of using finance for social good.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
