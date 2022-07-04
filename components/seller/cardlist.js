const CardList = () => {
  return (
    <div id="cardlist" className="card border border-3">
      <div className="card-body">
        <p className="kategori card-text fw-bold">Kategori</p>
        <p className="semua-prod card-text">
          <a href="/profile">
            Semua Produk <i className="icon-gt fw-bold float-end">&gt;</i>
          </a>
        </p>
        <hr />
        <p className="diminati card-text">
          <a href="/profile/diminati">
            Diminati <i className="icon-gt fw-bold float-end">&gt;</i>
          </a>
        </p>
        <hr />
        <p className="terjual card-text">
          <a href="/profile/terjual">
            Terjual <i className="icon-gt fw-bold float-end">&gt;</i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default CardList;
