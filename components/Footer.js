/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Footer.module.css";
import { Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.container}>
          <div className={styles.item}>
            <p className={styles.text}>19 Jalan Kemang I 10, RT.10/RW.5, 5, Bangka, Mampang Prapatan, South Jakarta City</p>
            <p className={styles.text}>secondhand@gmail.com</p>
            <p className={styles.text}>+62 812-2534-0414</p>
          </div>

          <div className={styles.item}>
            <Nav.Link href="/" className={styles.itemLink}>
              Our Services
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Why Us
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Testimonial
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              FAQ
            </Nav.Link>
          </div>

          <div className={styles.item}>
            <p className={styles.text}>Connect with us</p>
            <div>
              <a className={styles.sosmedLink} href="index.html" target="_blank">
                <img
                  src="/images/iconfb.png"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html" target="_blank">
                <img
                  src="/images/iconig.png"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html" target="_blank">
                <img
                  src="/images/icontweet.png"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html" target="_blank">
                <img
                  src="/images/iconmail.png"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html" target="_blank">
                <img
                  src="/images/icontwitch.png"
                  alt="icon"
                  className={styles.img}
                />
              </a>
            </div>
          </div>

          <div className={styles.item}>
            <p className={styles.text}>Copyright FSW6-Group3 2022</p>
            <a href="index.html">
              <img
                src="/images/Secondhandlogo.png"
                alt="logo"
                className={styles.logo}
              />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
