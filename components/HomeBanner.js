/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/HomeBanner.module.css";
import { Carousel, Container } from "react-bootstrap";

const imageBanner = [
  { id: 1, image: "/images/banner1.png" },
  { id: 2, image: "/images/banner1.png" },
  { id: 3, image: "/images/banner1.png" },
];

export default function HomeBanner() {
  return (
    <>
      <Container className={styles.container}>
        <Carousel>
          {imageBanner.map((a) => (
            // eslint-disable-next-line react/jsx-key
            <Carousel.Item>
              <img src={a.image} alt="banner" className={styles.img} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
