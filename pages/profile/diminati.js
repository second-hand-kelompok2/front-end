import { NavbarProfile } from "../../components/navbar";
import Card from "../../components/seller/card";
import CardList from "../../components/seller/cardlist";
// import CardProduct from "../../components/CardProductDiminati";
import { useEffect, useState } from "react"
import axios from "axios";
import { NavNoLogin } from "../../components/NavNoLogin";

const Diminati = () => {
  //   const contentStyle = {
  //     minHeight: "90vh",
  //     top: "56px",
  //     backgroundColor: "#f1f1f9",
  //     overflowX: "hidden",
  //   };

  const [list, setList] = useState([])

  useEffect(() => {
    getList()
    // console.log(list)
  })

  const getList = async () => {
    try {
      const id = window.localStorage.getItem("id")
      const token = window.localStorage.getItem("token");

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/wishlist/${id}`, {
        headers: {
          token: token
        }
      })
      setList(response.data.data)
      console.log("Berhasil ambil data")
    }

    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      {/* <NavbarProfile></NavbarProfile> */}
      <NavNoLogin/>
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
                    src="../images/image-casio1.png"
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
                  <button type="button" className="btn btn-outline-dark" href="#">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden-button">
          <button type="button" class="btn btn-primary">
            Produk
          </button>
          <button type="button" class="btn btn-primary">
            Diminati
          </button>
          <button type="button" class="btn btn-primary">
            Terjual
          </button>
        </div>
        <div className="card-position d-flex">
          <div className="card-list-seller me-5">
            {/* <CardList/> */}
            <div id="cardlist" className="card border border-3">
              <div className="card-body">
                <p className="kategori card-text fw-bold">Kategori</p>
                <p className="semua-prod card-text">
                  <a className="buton" href="/profile">
                    Semua Produk <i className="icon-gt fw-bold float-end">&gt;</i>
                  </a>
                </p>
                <hr />
                <p className="diminati card-text">
                  <a className="active" href="/profile/diminati">
                    Diminati <i className="icon-gt fw-bold float-end">&gt;</i>
                  </a>
                </p>
                <hr />
                <p className="terjual card-text">
                  <a className="buton" href="/profile/terjual">
                    Terjual <i className="icon-gt fw-bold float-end">&gt;</i>
                  </a>
                </p>
                <style jsx>{`
                  /* Style the buttons */
                  .active{
                    text-decoration: none;
                    color: blueviolet;
                  }
                  .active:hover{
                    color: black;
                  }
                  /* Style the active class (and buttons on mouse-over) */
                  .buton{
                    color: black;
                    text-decoration: none;
                  }
                  .buton:hover {
                    color: blueviolet;
                  }
                `}</style>
              </div>
            </div>
          </div>
          <div>
            <div className="wishlist">
              {list.map((item) => <Card key={item.id} props={item}></Card>) }
              {/* {list.map((item) => <CardProduct key={item.id} props={item}></CardProduct>) } */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer */}
    </div>
  );
};

export default Diminati;
