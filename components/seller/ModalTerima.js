import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalTerima() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='buton btn' onClick={handleShow}>
        Terima
      </Button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter" 
        show={show} 
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton className='me-4'>
        </Modal.Header>
        <Modal.Body className='m-4'>
          <h4>Yeay kamu berhasil mendapat harga yang sesuai</h4>
          <p>
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="card-body">
            <h4 className="text-center mb-4">Product Match</h4>
            <p className="d-flex">
              <img src='./images/sample_profile_small.png' className='me-4 mb-4'/>
              <div>
                <h4>
                  Nama Pembeli
                </h4>
                <p>
                  Kota
                </p>
              </div>
            </p>
            <p className="d-flex">
              <img src='./images/sample_profile_small.png' className='me-4 mb-5 mt-0'/>
              <div>
                <h4>
                  Jam Tangan Casio
                </h4>
                <h4>
                  Rp 250.000
                </h4>
                <h4>
                  Ditawar Rp 200.000
                </h4>
              </div>
            </p>
          </div>
          <div className='buton mt-3'>
            <button type="button" className='btn text-white' onClick={handleClose}>
              Hubungi via Whatsapp
              <img src="./images/Whatsapp.png"></img>
            </button>
          </div>
      </Modal.Body>
      </Modal>
      <style jsx>{`
        .body {
          background: #FFFFFF;
          border-radius: 16px;
          width: 360px;
          height: 456px;
          font-family: 'Poppins';
        }
        .card-body {
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: #EEEEEE;
          border-radius: 16px;
          font-family: 'Poppins';
        }
        .buton {
          border-radius: 16px;
          margin-left: 90px;
          margin-right: 100px;
          justify-content-center;
          background: #7126B5;
          font-family: 'Poppins';
        }
        .buton img {
          margin-left: 25px;
        }
      `}</style>
    </>
  );
}

export default ModalTerima;