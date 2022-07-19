import Card from "../../components/seller/card";
import CardList from "../../components/seller/cardlist";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import API from "../../services";
import { useSSRSafeId } from "@react-aria/ssr";
const user =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};
const DaftarJual = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState({});

  //memanggil func getproducts
  useEffect(() => {
    getProducts();
  }, []);

  //memanggil func getproducts
  // useEffect(() => {
  //   getUsers();
  // }, []);

  useEffect(() => {
    setUsers(user);
  }, [user]);

  // fetch data api
  const getProducts = async () => {
    const userid = window.localStorage.getItem("id");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/product/${userid}`
      );
      console.log(response.data);
      setProducts(response.data.data);
    } catch (err) {}
  };

  // fetch data api
  const getUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/users/`);
      console.log(response.data);
      setUsers(response.data.data);
    } catch (err) {}
  };

  return (
    <div>
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
                    src={users?.product_img}
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></img>
                </div>
                <div className="profile-name d-inline">
                  {/* {users.length == 0 ? "loading" : users[0].name} */}
                  {users?.name}
                  <br />
                  <font className="profile-kota ">{users?.city}</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                  <Link href={`/profile/edit/${users?.id}`}>
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
            {products.length == 0
              ? "loading"
              : products.map((product) => (
                  <div className="card-item" key={product.id}>
                    <a className="cardlink" href={`/product/${product.id}`}>
                      <div
                        id="cardSell"
                        className="card"
                        style={{ width: "18rem" }}
                      >
                        <img
                          src={product.Images[0].product_img}
                          className="card-img-top"
                          alt="..."
                        ></img>
                        <div className="card-body">
                          <p className="card-text name-p">
                            {product.product_name}
                          </p>
                          <p className="card-text type-p">
                            {product.product_type}
                          </p>
                          <p className="card-text price-p">
                            {product.product_price}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* <Footer */}
    </div>
  );
};

export default DaftarJual;
