/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/ListProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import CardProduct from "./CardProduct";

const jam = [
  {
    id:1,
    image: "/images/jamtangan1.jpg",
    judul: "Fossil FS4991",
    kategori: "Jam tangan",
    harga: "259.900",
  },
  {
    id:2,
    image: "/images/jamtangan2.jpg",
    judul: "Fossil Watches - Macy's",
    kategori: "jam tangan",
    harga: "789.999",
  },
  {
    id:3,
    image: "/images/jamtangan3.jpeg",
    judul: "Citizen JM5460-01E",
    kategori: "",
    harga: "659.999",
  },
  {
    id:4,
    image: "/images/jamtangan4.jpg",
    judul: "Fossil Pria Original Garansi Resmi ME3053 Automatic",
    kategori: "",
    harga: "829.989",
  },
  {
    id:5,
    image: "/images/jamtangan5.jpg",
    judul: "FOSSIL SKELETON ORIGINAL",
    kategori: "",
    harga: "759.999",
  },
  {
    id:6,
    image: "/images/jamtangan6.jpg",
    judul: "Cerruti 1881 CIWGQ2206702 Original",
    kategori: "",
    harga: "780.900",
  },
  {
    id:7,
    image: "/images/jamtangan7.jpg",
    judul: "Jual JAM TANGAN PRIA JAM TANGAN IMPORT JAM FULL STEINLESS",
    kategori: "",
    harga: "459.999",
  },
  {
    id:8,
    image: "/images/jamtangan8.jpg",
    judul: "jam tangan kulit pria EYKI non ORIGINAL",
    kategori: "",
    harga: "789.989",
  },
  {
    id:8,
    image: "/images/jamtangan9.jpg",
    judul: "SKMEI Analog Pria Strap Kulit - 1618 - Golden",
    kategori: "",
    harga: "759.989",
  },
  {
    id:8,
    image: "/images/jamtangan10.jpg",
    judul: "Jual Jam Tangan Ripcurl 6295 Tali Kulit",
    kategori: "",
    harga: "259.900",
  },
  {
    id:8,
    image: "/images/jamtangan11.jpg",
    judul: "Jam Quicksilver",
    kategori: "",
    harga: "900.989",
  },
  {
    id:8,
    image: "/images/jamtangan12.jpeg",
    judul: "Msg W200g 1a2jf",
    kategori: "",
    harga: "289.000",
  },
];

export default function ListProduct() {
  const router = useRouter();
  return (
    <>
      <Container>
        <h1 className={styles.title}>Telusuri Kategori</h1>
        <div className={styles.btnFilterContainer}>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Semua</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Hobi</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Kendaraan</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Baju</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Eletronik</p>
              </Button>
            </a>
          </Link>
          <Link href="">
            <a>
              <Button className={styles.btnFilterActive} type="search">
                <Search className={styles.icon} />
                <p className={styles.text}>Kesehatan</p>
              </Button>
            </a>
          </Link>
        </div>
        <div className={styles.produkContainer}>
          {jam.map((a) => (
            <CardProduct buku={a} key={a.id}/>
          ))}
        </div>
      </Container>
    </>
  );
}
