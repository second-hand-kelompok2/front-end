import { NavbarProfile } from "../../components/navbar";
import Card from "../../components/seller/card";
import CardList from "../../components/seller/cardlist";
import { useEffect, useState } from "react"
import axios from "axios";
import { NavNoLogin } from "../../components/NavNoLogin";

const user =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

const Terjual = () => {
  //   const contentStyle = {
  //     minHeight: "90vh",
  //     top: "56px",
  //     backgroundColor: "#f1f1f9",
  //     overflowX: "hidden",
  //   };

  const [list, setList] = useState([])
  const [users, setUsers] = useState({});

  useEffect(() => {
    getList()
    console.log(list)
  })

  useEffect(() => {
    setUsers(user);
    console.log(user);
  }, [user]);

  const getList = async () => {
    try {
      const id = window.localStorage.getItem("id")
      const token = window.localStorage.getItem("token");

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/transaction/sold-transaction/${id}`, {
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
      {/* <NavbarProfile /> */}
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
                    src={users?.profile_img}
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></img>
                </div>
                <div className="profile-name d-inline">
                {users?.name}
                  <br />
                  <font className="profile-kota ">{users?.city}</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                  <button type="button" className="btn btn-outline-dark">
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
          <div className="card-list-seller">
            {/* <CardList /> */}
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
                  <a className="buton" href="/profile/diminati">
                    Diminati <i className="icon-gt fw-bold float-end">&gt;</i>
                  </a>
                </p>
                <hr />
                <p className="terjual card-text">
                  <a className="active" href="/profile/terjual">
                    Terjual <i className="icon-gt fw-bold float-end">&gt;</i>
                  </a>
                </p>
                <div className="wishlist">
                {/* <img src="../images/diminati.png" />
                <p>
                  Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
                </p> */}
                {list.map((item) => <Card key={item.id} props={item}></Card>) }
              </div>
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
        </div>
      </div>
      {/* <Footer */}
    </div>
  );
};

export default Terjual;
