/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function CardProduct(props) {
  console.log('id: ', props.props.id)
  return (
    <>
      <div id={props.props.id} className={styles.card}>
        <Link href={`/product/${props.props.id}`}>
          <a>
            <img
              src={props.props.Images[0].product_img}
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
