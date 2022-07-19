import { Col, Row, Image, Form, Button, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import LogoImage from "../../../components/LogoImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSpaghettiMonsterFlying,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import API from "../../../services";
import { useParams } from "react-router-dom";

function Profile() {
  // const router = useRouter();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getUserByID();
  }, []);
  const getUserByID = async () => {
    const response = await API.get(`/users/${id}`);
    setFileInputState(response.data.data.profile_img);
    setName(response.data.data.name);
    setCity(response.data.data.city);
    setAddress(response.data.data.address);
    setPhone(response.data.data.phone);
  };

  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    setFileInputState(e.target.files[0]);
    // const product_img = e.target.files[0];
    // previewFile(e.target.files[0]);
    // setSelectedFile(product_img);
    // setFileInputState(e.target.value);
  };

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   // konvert to url
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("profile_img", fileInputState);
      formData.append("phone", phone);
      formData.append("city", city);
      formData.append("address", address);
      await API.post(`/profile/update/${id}`, formData);
    } catch (error) {
      console.log(error);
    }
  };

  // function handleUploadChange(e) {
  //   console.log(e.target.files[0]);
  //   let Uploaded = e.target.files[0];
  //   setImage(URL.createObjectURL(Uploaded));
  //   setSaveImage(Uploaded);
  // }
  return (
    <Row>
      <Nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <div className="navbar-brand flex-grow-1">
            <LogoImage />
          </div>
          <div className="mx-auto ">
            <h3 className="fw-bold">Lengkapi Info Akun</h3>
          </div>
          <div className="flex-grow-1 pusher"></div>
        </div>
      </Nav>
      <Col md={6} className="my-auto mx-auto">
        <div className="mx-auto my-auto CamIcon">
          <label htmlFor="file-upload">
            <FontAwesomeIcon
              icon={faCamera}
              id="btnIcon"
              className="camera-icon"
            />
          </label>
          <input
            id="file-upload"
            name="profile_img"
            onChange={handleFileInputChange}
            type="file"
            className="custom-rounded p-2 image-file"
          />
        </div>
        <div className="mx-auto w-75">
          <Form onSubmit={handleSubmitFile}>
            <Form.Group controlId="name" className="mt-3">
              <Form.Label className="fw-bold">Nama </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                className="custom-rounded p-2"
              />
            </Form.Group>
            <Form.Group controlId="kota" className="mt-3">
              <Form.Label className="fw-bold">Kota</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Contoh: johndee@gmail.com"
                className="custom-rounded p-2"
              />
            </Form.Group>
            <Form.Group controlId="alamat" className="mt-3">
              <Form.Label className="fw-bold">Alamat</Form.Label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control custom-rounded p-2"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              ></textarea>
            </Form.Group>
            <Form.Group controlId="hp" className="mt-3">
              <Form.Label className="fw-bold">No Handphone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="contoh: +628123456789"
                className="custom-rounded p-2"
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <button
                className="btn text-white purple-bg custom-rounded p-2 ms-2"
                type="submit"
              >
                Simpan
              </button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
