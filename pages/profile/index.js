import { NavbarProfile } from "../../components/navbar";
import Card from "../../components/seller/card";
import CardList from "../../components/seller/cardlist";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const DaftarJual = () => {
  const [products, setProduct] = useState([]);

  //memanggil func getproducts
  useEffect(() => {
    getProducts();
  }, []);

  // fetch data api
  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/");
    // console.log(response.data);
    setProduct(response.data);
  };

  return (
    <div>
      <NavbarProfile></NavbarProfile>
      {/* <Header /> */}
      <div id="daftarjual" className="container content position-relative">
        <div className="row">
          <div className="col-12 d-flex mb-3">
            <p className="mt-5 h2 fw-bold">Daftar Jual Saya</p>
          </div>
          <div className="container mb-4 ">
            <div className="card-body p-0">
              <div className="profile-card border border-3 rounded">
                <div className="profile-img d-inline">
                  <img
                    src="images/image-casio1.png"
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></img>
                </div>
                <div className="profile-name d-inline">
                  Nama Penjual
                  <br />
                  <font className="profile-kota ">Kota</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                  <Link href={`/profile/edit/${products.id}`}>
                    <button type="button" className="btn btn-outline-dark">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden-button">
          <Link href="/profile/">
            <button type="button" className="btn btn-primary">
              Produk
            </button>
          </Link>
          <Link href="/profile/diminati">
            <button type="button" className="btn btn-primary">
              Diminati
            </button>
          </Link>
          <Link href="/profile/terjual">
            <button type="button" className="btn btn-primary">
              Terjual
            </button>
          </Link>
        </div>
        <div className="card-position d-flex">
          <div className="card-list-seller">
            <CardList />
          </div>
          <div className="card-seller">
            <div className="card-item">
              <Link href="/profile/product/add">
                <button
                  type="button"
                  className="button-card btn btn-outline-dark"
                >
                  <p className="icon-plus m-0">+</p>
                  Tambah Produk
                </button>
              </Link>
            </div>
            {/* {products.map((product, index) => (
              <div className="card-item">
                <Card />
              </div>
            ))} */}
            <div className="card-item">
              <Card />
            </div>
            <div className="card-item">
              <Card />
            </div>
            <div className="card-item">
              <Card />
            </div>
            <div className="card-item">
              <Card />
            </div>
            <div className="card-item">
              <Card />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer */}
    </div>
  );
};

export default DaftarJual;
