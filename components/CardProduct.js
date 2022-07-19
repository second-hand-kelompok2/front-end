/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function CardProduct(props) {
  return (
    <>
      <div className={styles.card}>
        <Link href="/">
          <a>
            <img
              src={props.props.Images[0]}
              alt="Image not available"
              className={styles.imgProduk}
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <p className={styles.judul}>{props.props.product_name}</p>
          </a>
        </Link>
        <p className={styles.harga}>Rp {props.props.product_price}</p>
      </div>
    </>
  );
}
