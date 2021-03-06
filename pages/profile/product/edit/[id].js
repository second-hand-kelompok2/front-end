import React, { useState, useEffect } from "react";
import API from "../../../../services";
import { useRouter } from "next/router";
// import _ from "lodash";

const Edit = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const [fileInputState, setFileInputState] = useState([]);
  const [previewSource, setPreviewSource] = useState([]);

  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = async () => {
    console.log(router.query.id);
    const response = await API.get(`/product/info/${router.query.id}`);
    console.log(response.data.data[0]);
    // setFileInputState(response.data.data[0].profile_img);
    setName(response.data.data[0].product_name);
    setCategory(response.data.data[0].product_category);
    setDesc(response.data.data[0].product_desc);
    setPrice(response.data.data[0].product_price);
  };

  const handleFileInputChange = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      validImageFiles.push(file);
    }
    if (validImageFiles.length) {
      setFileInputState(validImageFiles);
      return;
    }
  };

  useEffect(() => {
    const previewSource = [],
      fileReaders = [];
    let isCancel = false;
    if (fileInputState.length) {
      fileInputState.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            previewSource.push(result);
          }
          if (previewSource.length === fileInputState.length && !isCancel) {
            setPreviewSource(previewSource);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [fileInputState]);

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_category", category);
    formData.append("product_desc", desc);
    formData.append("product_price", price);
    Object.values(fileInputState).forEach((file) => {
      formData.append("product_img", file);
    });
    const token = window.localStorage.getItem("token");

    try {
      await API.post(`/product/update/${router.query.id}`, formData
      );
      router.push({ pathname: "/profile" });
    } catch (error) {
      console.log(error);
    }
  };

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
                    <option value="Kendaraan">Kendaraan</option>
                    <option value="Aksesoris">Aksesoris</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Elektronik">Elektronik</option>
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
                  {previewSource.length > 0
                    ? previewSource.map((preview, idx) => (
                        <div key={idx} className="prev-imgs">
                          <img
                            className="prev-img"
                            alt="chosen"
                            src={preview}
                          />
                        </div>
                      ))
                    : null}
                  <div>
                    <input
                      className="file-input"
                      type="file"
                      multiple
                      id="foto_produk"
                      name="product_img"
                      onChange={handleFileInputChange}
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
export default Edit;
