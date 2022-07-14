import React, { useState } from "react";
import API from "../../../services";
import { useRouter } from "next/router";

const Add = () => {
  // const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    // konvert to url
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    try {
      await API.post("/product/add", {
        product_name: name,
        product_category: category,
        product_desc: desc,
        product_price: price,
      });
    } catch (error) {
      console.log(error);
    }
    if (!previewSource) return;
    uploadImage(previewSource);
    //   router.push("/profile");
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch("http://localhost:5000/api/v1/product/add", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const history = useRouter();

  // const saveProduct = async (e) => {
  //   //supaya tida reload
  //   e.preventDefault();
  //   await axios.post("http://loaclhost:5000/", {
  //     product_name: name,
  //     product_price: price,
  //     product_category: category,
  //     product_desc: desc,
  //     product_img: imgs,
  //   });
  //   history.push("/profile");
  // };

  // const getImage = (e) => setImgs(URL.createObjectURL(e.target.files[0]));

  // const uploadFiles = () => {
  //   document.getElementById("foto_produk").click();
  // };
  return (
    <div id="add" className="container content position-relative">
      <div className="row">
        <div className="col-12 mb-3">
          <p className="icon-arrow mt-5 h2 fw-bold">
            <span>&larr;</span>
          </p>
          <div className="form-add">
            <form onSubmit={handleSubmitFile}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Rp 0.00"
                  />
                </div>
              </div>
              <div className="row">
                <label className="form-label" for="kategori">
                  Kategori
                </label>
                <div>
                  <select
                    class="form-select"
                    name="kategori"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
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
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Contoh : Ikan Hiu 33"
                  />
                </div>
              </div>
              <div className="row">
                {/* <SingleUploader/> */}
                <div className="d-flex">
                  <label className="form-label-foto" for="foto_produk">
                    Foto Produk
                    <br />
                    <a class="btn-img" rel="nofollow">
                      +
                    </a>
                  </label>
                  {previewSource && (
                    <div className="prev-imgs">
                      <img
                        className="prev-img"
                        alt="chosen"
                        src={previewSource}
                      />
                    </div>
                  )}
                  <div>
                    <input
                      className="file-input"
                      type="file"
                      id="foto_produk"
                      name="foto_produk"
                      onChange={handleFileInputChange}
                      value={fileInputState}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-add">
                Terbitkan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
