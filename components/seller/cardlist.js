const CardList = () => {
  return (
    <div id="cardlist" className="card border border-3">
      <div className="card-body">
        <p className="kategori card-text fw-bold">Kategori</p>
        <p className="semua-prod card-text">
          <a className="active" href="/profile">
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
            
          }
          /* Style the active class (and buttons on mouse-over) */
          .buton{
            color: black;
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardList;
