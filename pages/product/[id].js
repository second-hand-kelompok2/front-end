import Carousel from "react-elastic-carousel";
import style from "../../styles/Info.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { NavbarProfile } from "../../components/navbar";
import Images from "../../components/ProductImages";
import { NavNoLogin } from "../../components/NavNoLogin";

const ProductInfo_Buyer = () => {    
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [smallImage, setSmallImage] = useState([]);
  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/info/${router.query.id}`
      );
      setProduct(response.data.data[0]);
      setUser(response.data.data[0].User);
      setUserImage(response.data.data[0].User.profile_img);
      setImages(response.data.data[0].Images);
      setSmallImage(response.data.data[0].Images[0].product_img);
    } catch (err) {
      console.log(err);
    }
  };

  const [displayClass, setDisplayClass] = useState(style.popupHide);

  const changeDisplay = () => {
    if (displayClass == style.popupHide) {
      setDisplayClass(style.popupDisplay);
    } else {
      setDisplayClass(style.popupHide);
    }
  };

  const handleSubmit = async (e, req_price) => {
    e.preventDefault()
    // const buyerId = 1;
    const buyerId = window.localStorage.getItem("id")
    const sllerId = product.user_id;
    const product_id = router.query.id;
    const token = window.localStorage.getItem("token");

    console.log(req_price, buyerId, sllerId)

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/transaction/create`, {
        buyerId,
        sllerId,
        product_id,
        req_price
      }, {
        headers: {
          token: token,
        }
      })

      console.log("Berhasil kirim")
      console.log(response)
    }

    catch(err) {
      console.log(err)
    }
    
    changeDisplay()
  }

  return (
    <>
      {/* <NavbarProfile></NavbarProfile> */}
      <NavNoLogin />

      <div className={style.productInfo}>
        <div className={style.left}>
          <div className={style.top}>
            <Carousel className={style.carousel}>
              {images.map((item) => (
                <Images props={item}></Images>
              ))}
            </Carousel>
          </div>

          <div className={style.bottom}>
            <h1>Deskripsi</h1>
            <p>{product.product_desc}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
        </div>

        <div className={style.right}>
          <div className={style.top}>
            <h2>{product.product_name}</h2>
            <p>{product.product_category}</p>
            <h3>Rp {product.product_price}</h3>
            <button className={style.btnPurple} onClick={changeDisplay}>
              Saya tertarik dan ingin nego
            </button>
          </div>

          <div className={style.bottom}>
            <img src={userImage} alt="profileImage" />

            <div className={style.sellerInfo}>
              <h1>{user.name}</h1>
              <h4>{user.city}</h4>
            </div>
          </div>
        </div>

        <div className={displayClass}>
          <div className={style.popupContainer}>
            <div className={style.popup}>
              <p onClick={changeDisplay}>X</p>

              <h1>Masukkan Harga Tawarmu</h1>
              <h2>
                Harga tawaranmu akan diketahui penjual. Jika penjual cocok, kamu
                akan segera dihubungi penjual.
              </h2>

              <div className={style.info}>
                <img src={smallImage} alt="profileImage" />

                <div>
                  <h1>{product.product_name}</h1>
                  <h3>Rp {product.product_price}</h3>
                </div>
              </div>

              <h3>Harga Tawar</h3>
              <form action="/" method="POST">
                <input id='hargaTawar' type="number" placeholder="Rp 0,00" required />
              </form>
              <button onClick={(event) => handleSubmit(event, document.getElementById('hargaTawar').value)} type="button" className={style.btnPurple}>
                Kirim
              </button>
            </div>
          </div>
        </div>

        {/* Import footer component */}
      </div>
    </>
  );
};

export default ProductInfo_Buyer;
