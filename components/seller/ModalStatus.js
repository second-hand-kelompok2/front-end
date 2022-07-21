import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ModalStatus() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [gender,setGender]=useState('');

   const handleChange=(e)=>{
       setGender( e.target.value);
    }
    return (
      <>
        <Button className='buton btn' onClick={handleShow}>
          Hubungi di
          <img src="./images/Whatsapp.png" className=''></img>
        </Button>
  
        <Modal
          aria-labelledby="contained-modal-title-vcenter" 
          show={show} 
          onHide={handleClose}
          centered
        >
          <Modal.Header closeButton className='m-5 mt-0 mb-0'>
          </Modal.Header>
          <Modal.Body className='m-4 mt-0 mb-0'>
            <h4 className='mb-3'>Perbarui status penjualan produkmu</h4>
            <form>
              <input type="radio" value="success"
                onChange={handleChange} name="true/false" />
              <label className='radioLabel'>Berhasil terjual</label>
              <p className='radioSubLabel'>
                Kamu telah sepakat menjual produk ini kepada pembeli
              </p>

              <input type="radio" value="cancel"
                onChange={handleChange} name="true/false"/>
              <label className='radioLabel'>Batalkan transaksi</label>
              <p className='radioSubLabel'>
                Kamu membatalkan transaksi produk ini dengan pembeli
              </p>
            </form>
            <div className='buton mt-5'>
              <button type="button" className='btn buton text-white' onClick={handleClose}>
                Kirim
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
          .buton {
            border-radius: 16px;
            margin-left: 90px;
            margin-right: 100px;
            justify-content-center;
            background: #7126B5;
            font-family: 'Poppins';
          }
          .radioLabel {
            font-family: 'Poppins';
            font-size: 24px;
            margin-left: 15px;
          }
          .radioSubLabel {
            font-family: 'Poppins';
            font-size: 20px;
            font-color: #8A8A8A;
            margin-left: 28px;
            margin-right: 70px;
          }
        `}</style>
      </>
    );
  }
  
  export default ModalStatus;