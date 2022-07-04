import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [desc, setDesc] = useState("");

  const [imgs, setImgs] = useState("");

  // const history = useRouter();

  // const saveProduct = async (e) => {
  //   //supaya tida reload
  //   e.preventDefault();
  //   await axios.post("http://loaclhost:3000/", {
  //     product_name: name,
  //     product_price: price,
  //     product_category: category,
  //     product_desc: desc,
  //     product_img: imgs,
  //   });
  //   history.push("/profile");
  // };

  const getImage = (e) => setImgs(URL.createObjectURL(e.target.files[0]));

  const uploadFiles = () => {
    document.getElementById("foto_produk").click();
  };
  return (
    <div id="add" className="container content position-relative">
      <div className="row">
        <div className="col-12 mb-3">
          <p className="icon-arrow mt-5 h2 fw-bold">
            <span>&larr;</span>
          </p>
          <div className="form-add">
            <form action="/send-data-here" method="post">
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
                  <select class="form-select" name="kategori">
                    <option selected hidden>
                      Pilih Kategori
                    </option>
                    <option value="Mobil">Mobil</option>
                    <option value="Jam Tangan">Jam Tangan</option>
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
                <div className="d-flex">
                  <label
                    onClick={uploadFiles}
                    className="form-label-foto"
                    for="foto_produk"
                  >
                    Foto Produk
                    <br />
                    <a class="btn-img" rel="nofollow">
                      +
                    </a>
                  </label>
                  <div className="prev-imgs">
                    <img className="prev-img" src={imgs} />
                  </div>
                  <div>
                    <input
                      className="file-input"
                      type="file"
                      id="foto_produk"
                      name="foto_produk"
                      onChange={getImage}
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="btn-add">
                Terbitkan
              </button>
            </form>
            {/* <form onSubmit={saveProduct}>
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
                    // value={name}
                    // onChange={(e)=> setName(e.target.value)}
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
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <label className="form-label" for="kategori">
                  Kategori
                </label>
                <div>
                  <select class="form-select" name="kategori">
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
                    // value={desc}
                    // onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="d-flex">
                  <label
                    onClick={uploadFiles}
                    className="form-label-foto"
                    for="foto_produk"
                  >
                    Foto Produk
                    <br />
                    <a class="btn-img" rel="nofollow">
                      +
                    </a>
                  </label>
                  <div className="prev-imgs">
                    <img className="prev-img" src={imgs} />
                  </div>
                  <div>
                    <input
                      className="file-input"
                      type="file"
                      id="foto_produk"
                      name="foto_produk"
                      onChange={getImage}
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="btn-add">
                Terbitkan
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
