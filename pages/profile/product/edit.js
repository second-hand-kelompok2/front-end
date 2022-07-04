import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { stripBasename } from "react-router/lib/router";

const Edit = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [desc, setDesc] = useState("");

  const [imgs, setImgs] = useState("");

  // const history = useRouter();
  // const {id} = history.query

  // const updateProduct = async (e) => {
  //   //supaya tida reload
  //   e.preventDefault();
  //   await axios.post(`http://loaclhost:3000/${id}`, {
  //     product_name: name,
  //     product_price: price,
  //     product_category: category,
  //     product_desc: desc,
  //     product_img: imgs,
  //   });
  //   history.push("/profile");
  // };

  // useEffect(() => {
  //   getProductById();
  // }, []);
  // const getProductById = async () => {
  //   const response = await axios.get(`http://localhost:3000/profile/${id}`);
  //   stripBasename(response.data.name);
  // };

  const getImage = (e) => setImgs(URL.createObjectURL(e.target.files[0]));

  const uploadFiles = () => {
    document.getElementById("foto_produk").click();
  };
  return (
    <div id="edit" className="container content position-relative">
      <div className="row">
        <div className="col-12 mb-3">
          <p className="icon-arrow mt-5 h2 fw-bold">
            <span>&larr;</span>
          </p>
          <div className="form-edit">
            <form
              action="/send-data-here"
              method="post"
              //   enctype="multipart/form-data"
            >
              <div className="row">
                <label className="form-label" for="nama_produk">
                  Nama Produk
                </label>
                <div>
                  <input
                    className="form_input"
                    type="text"
                    id="nama_produk"
                    name="nama_produk"
                    placeholder="Nama Produk"
                  />
                </div>
              </div>
              <div className="row">
                <label className="form-label" for="harga_produk">
                  Harga Produk
                </label>
                <div>
                  <input
                    className="form_input"
                    type="text"
                    id="harga_produk"
                    name="harga_produk"
                    placeholder="Rp 0.00"
                  />
                </div>
              </div>
              <div className="row">
                <label className="form-label" for="kategori">
                  Kategori
                </label>
                <div>
                  <select className="form-select" name="kategori">
                    <option selected hidden>
                      Pilih Kategori
                    </option>
                    <option value="Mobil">Mobil</option>
                    <option value="Aksesoris">Jam Tangan</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Motor">Motor</option>
                    <option value="Laptop">Laptop</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <label className="form-label" for="deskripsi">
                  Deskripsi
                </label>
                <div>
                  <textarea
                    className="form_input form-control"
                    id="deskripsi"
                    name="deskripsi"
                    placeholder="Contoh : Ikan Hiu 33"
                  />
                </div>
              </div>
              <div className="row">
                <label className="form-label-foto" for="foto_produk">
                  Foto Produk
                  <br />
                  <a class="btn-img" rel="nofollow">
                    +
                  </a>
                </label>
                <div>
                  <input
                    className="file-input"
                    type="file"
                    id="foto_produk"
                    name="foto_produk"
                  />
                </div>
                <div id="display-image"></div>
              </div>
              <button type="button" className="btn-edit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Edit;
