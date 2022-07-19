/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/ListProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import CardProduct from "./CardProduct";
import { useEffect, useState } from "react"
import axios from "axios"

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
    id:9,
    image: "/images/jamtangan9.jpg",
    judul: "SKMEI Analog Pria Strap Kulit - 1618 - Golden",
    kategori: "",
    harga: "759.989",
  },
  {
    id:10,
    image: "/images/jamtangan10.jpg",
    judul: "Jual Jam Tangan Ripcurl 6295 Tali Kulit",
    kategori: "",
    harga: "259.900",
  },
  {
    id:11,
    image: "/images/jamtangan11.jpg",
    judul: "Jam Quicksilver",
    kategori: "",
    harga: "900.989",
  },
  {
    id:12,
    image: "/images/jamtangan12.jpeg",
    judul: "Msg W200g 1a2jf",
    kategori: "",
    harga: "289.000",
  },
];

export default function ListProduct() {
  // const router = useRouter();
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProduct()
    console.log("Produk: ", productList)
  }, [])
  
  const getProduct = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product`)
      setProductList(response.data.data)
      console.log('Get All ', productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const handleFilter = async (e, category) => {
    try {
      e.preventDefault()
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/filterByCategory`, {
          category
        })
        setProductList(response.data.data)
        console.log('Filter ', category, productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const handleSearch = async (e, productName) => {
    try {
      e.preventDefault()
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/filterByName`, {
          productName
        })
        setProductList(response.data)
        console.log('Search ', productName, productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <h1 className={styles.title}>Telusuri Kategori</h1>

        <div className={styles.btnFilterContainer}>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={() => getProduct()}>
                <Search className={styles.icon} />
                <p className={styles.text}>Semua</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Hobi")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Hobi</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Kendaraan")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Kendaraan</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Baju")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Baju</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Aksesoris")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Aksesoris</p>
              </Button>
            </a>
        </div>
        
        <div className={styles.produkContainer}>
          {/* {jam.map((a) => (
            <CardProduct buku={a} key={a.id}/>
          ))} */}

          { productList.map((item) => <CardProduct key={item.id} props={item}/>) }
        </div>
      </Container>
    </>
  );
}
