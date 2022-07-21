import Carousel from 'react-elastic-carousel';
import style from '../../styles/Info.module.css';
import { useState, useEffect } from 'react';
import axios from "axios"
import { useRouter } from 'next/router';
import { NavbarProfile } from '../../components/navbar';
import Images from '../../components/ProductImages';

const ProductInfo_Buyer = () => {
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const router = useRouter()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/info/${router.query.id}`)
            setProduct(response.data.data[0])
            setImages(response.data.data[0].Images)
            console.log('Data: ', response.data.data[0])
            console.log('Images: ', response.data.data[0].Images)
            // console.log(router.query.id)
        }

        catch(err) {
            console.log(err)
        }
    }

    const [displayClass, setDisplayClass] = useState(style.popupHide)

    const changeDisplay = () => {
        if(displayClass == style.popupHide) {
            setDisplayClass(style.popupDisplay)
        }

        else {
            setDisplayClass(style.popupHide)
        }
    }

    return(
        <>
        <NavbarProfile></NavbarProfile>

        <div className={style.productInfo}>
            <div className={style.left}>
                <div className={style.top}>
                    <Carousel className={style.carousel}>
                        { images.map((item) => <Images props={item}></Images>) }
                    </Carousel>
                </div>
                
                <div className={style.bottom}>
                    <h1>Deskripsi</h1>
                    <p>{product.product_desc}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>

            <div className={style.right}>
                <div className={style.top}>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_category}</p>
                    <h3>Rp {product.product_price}</h3>
                    <button className={style.btnPurple} onClick={changeDisplay}>Saya tertarik dan ingin nego</button>
                </div>
                
                <div className={style.bottom}>
                    <img src='/images/sample_profile_small.png' alt='profileImage'/>
                    
                    <div className={style.sellerInfo}>
                        <h1>Nama Penjual</h1>
                        <h4>Kota</h4>
                    </div>
                </div>
            </div>

            <div className={displayClass}>
                <div className={style.popupContainer}>
                    <div className={style.popup}>
                        <p onClick={changeDisplay}>X</p>

                        <h1>Masukkan Harga Tawarmu</h1>
                        <h2>Harga tawaranmu akan diketahui penjual. Jika penjual cocok, kamu akan segera dihubungi penjual.</h2>

                        <div className={style.info}>
                            <img src={images[0]} alt='profileImage'/>
                            
                            <div>
                                <h1>{product.product_name}</h1>
                                <h3>Rp {product.product_price}</h3>
                            </div>
                        </div>

                        <h3>Harga Tawar</h3>
                        <form action='/' method='POST'>
                            <input type='number' placeholder='Rp 0,00' required/>
                        </form>
                        <button type='button' className={style.btnPurple}>Kirim</button>
                    </div>
                </div>
            </div>
            
            {/* Import footer component */}
        </div>
        </>
    )
}

export default ProductInfo_Buyer;