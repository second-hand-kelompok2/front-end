const Card = () => {
  return (
    <div id="cardSell" className="card" style={{ width: "18rem" }}>
      {/* <img src={product.profile_img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <p className="card-text name-p">{product.product_name}</p>
        <p className="card-text type-p">{product.product_type}</p>
        <p className="card-text price-p">{product.product_price}</p>
      </div> */}
      <img
        src="images/image-casio1.png"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <p className="card-text name-p">Jam Tangan</p>
        <p className="card-text kind-p">Aksesoris</p>
        <p className="card-text price-p">Rp. 50.000</p>
      </div>
    </div>
  );
};

export default Card;
