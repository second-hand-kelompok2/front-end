/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import styles from "../styles/NavNoLogin.module.css";
import {
  Button,
  Container,
  Form,
  Navbar,
  NavbarBrand,
  Nav,
} from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import styles from "../styles/NavNoLogin.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Navbar from "react-bootstrap/Navbar";
import Toast from "react-bootstrap/Toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Search } from "react-bootstrap-icons";
// import { CheckLg } from "react-bootstrap-icons";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const user =
  typeof window !== "undefined" ? window.localStorage.getItem("id") : {};

export const NavNoLogin = () => {
  const router = useRouter();

  const logout = async () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("id");
    router.push("/login");
  };

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div className={styles.box1}>
            <NavbarBrand href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                width="100px"
                height="34px"
              />
            </NavbarBrand>

            {/* <Form.Group className={styles.search}>
              <input type="search" placeholder="Cari di sini ..." aria-label="Search" className={styles.formsearch}/>
              <button type="search" className={styles.btnsearch}><Search className={styles.iconsearch}/></button>
            </Form.Group> */}
          </div>
          {user > 0 ? (
            <Navbar>
              <ButtonGroup aria-label="Basic example" className="">
                <Button variant="outline-light" href="#">
                  <img src="../images/fi_list.png"></img>
                </Button>
                <div>
                  <Button variant="outline-light" onClick={toggleShow}>
                    <img src="../images/fi_bell.png"></img>
                  </Button>
                  <div className="ToastContainer">
                    <Toast
                      className="Toast"
                      onClose={() => setShow(false)}
                      show={show}
                    >
                      <Toast.Body>Jam tangan</Toast.Body>
                    </Toast>
                  </div>
                  <style jsx>{`
                    .ToastContainer {
                      max-width: 500px;
                      position: absolute;
                      margin-left: -300px;
                    }
                    .Toast {
                      background-color: #ffffff;
                      border-radius: 25px;
                    }
                  `}</style>
                </div>
                <Button variant="outline-light" href="#">
                  <img src="../images/fi_user.png"></img>
                </Button>
              </ButtonGroup>
              <Button className={styles.btn} onClick={logout}>
                <p className={styles.txt}>Logout</p>
                <img
                  src="/images/fi_log-in.png"
                  alt="icon"
                  width="23px"
                  height="23px"
                />
              </Button>
            </Navbar>
          ) : (
            <div>
              <Button href="/login" className={styles.btn}>
                <img
                  src="/images/fi_log-in.png"
                  alt="icon"
                  width="23px"
                  height="23px"
                />
                <p className={styles.txt}>Masuk</p>
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};
