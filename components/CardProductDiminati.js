/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function CardProductDiminati(props) {
  console.log('id: ', props.props.id)
  return (
    <>
      <div className="card-seller">
                  <div className="card-item">
                    <a
                      className="cardlink"
                      href={`/product/${props.props.Product.id}`}
                    >
                      <div
                        id="cardSell"
                        className="card"
                        style={{ width: "18rem" }}
                      >
                        {/* <img
                          src={product.Images[0].product_img}
                          className="card-img-top"
                          style={{ height: 170 }}
                          alt="..."
                        ></img> */}
                        <div className="card-body">
                          <p className="card-text name-p">
                            {props.props.Product.product_name}
                          </p>
                          <p className="card-text type-p">
                            {props.props.Product.product_category}
                          </p>
                          <p className="card-text price-p">
                            {props.props.Product.product_price}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
          </div>
    </>
  );
}
