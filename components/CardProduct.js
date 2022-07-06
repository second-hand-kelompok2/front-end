/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function CardProduct(props) {
  const { buku } = props;
  
  return (
    <>
      <div className={styles.card}>
        <Link href="/">
          <a>
            <img
              src={buku.image}
              alt={buku.judul}
              className={styles.imgProduk}
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <p className={styles.judul}>{buku.judul}</p>
          </a>
        </Link>
        <p className={styles.harga}>Rp {buku.harga}</p>
      </div>
    </>
  );
}
