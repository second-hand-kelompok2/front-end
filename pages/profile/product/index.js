import Carousel from 'react-elastic-carousel';
import style from '../../../styles/Info.module.css';
import { NavbarProfile } from '../../../components/navbar';
// import Images from '../../../../components/ProductImages';

const ProductInfo_Seller = () => {
    return(
        <>
        <NavbarProfile></NavbarProfile>
        <div className={style.productInfo}>
            <div className={style.left}>
                <div className={style.top}>
                    <Carousel className={style.carousel}>
                        <img src='/images/sample_product_big.png' alt='product_image'/>
                        <img src='/images/sample_product_big.png' alt='product_image'/>
                        <img src='/images/sample_product_big.png' alt='product_image'/>
                        <img src='/images/sample_product_big.png' alt='product_image'/>
                        {/* <Images></Images> */}
                    </Carousel>
                </div>
                
                <div className={style.bottom}>
                    <h1>Deskripsi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className={style.right}>
                <div className={style.top}>
                    <h2>Product Name</h2>
                    <p>Category</p>
                    <h3>Product Price</h3>
                    <button className={style.btnPurple}>Terbitkan</button>
                    <button className={style.btnWhite}>Edit</button>
                </div>
                
                <div className={style.bottom}>
                    <img src='/images/sample_profile_small.png' alt='profileImage'/>
                    
                    <div className={style.sellerInfo}>
                        <h1>Nama Penjual</h1>
                        <h4>Kota</h4>
                    </div>
                </div>
            </div>
            
            {/* Import footer component */}
        </div>
        </>
    )
}

export default ProductInfo_Seller;