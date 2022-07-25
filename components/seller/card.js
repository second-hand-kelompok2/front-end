import Link from "next/link";

const Card = (props) => {
  return (
    <div id="cardSell" className="card" style={{ width: "18rem" }}>
      {/* <img src={product.profile_img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <p className="card-text name-p">{product.product_name}</p>
        <p className="card-text type-p">{product.product_type}</p>
        <p className="card-text price-p">{product.product_price}</p>
      </div> */}
      <img
        src={props.props.Product.Images[0].product_img}
        className="card-img-top"
        alt="..."
      ></img>
      <Link href={`/product/${props.props.Product.id}`}>
        <div className="card-body">
          <p className="card-text name-p">
            <b>{props.props.Product.product_name}</b>
          </p>
          {/* <p className="card-text kind-p">({props.props.Product.product_category})</p> */}
          <br />
          <p className="card-text price-p">
            {" "}
            Harga produk: {props.props.Product.product_price}
          </p>
          <p className="card-text price-p">
            {" "}
            Harga tawar: {props.props.req_price}
          </p>
          <p className="card-text price-p"> Status: {props.props.status}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
