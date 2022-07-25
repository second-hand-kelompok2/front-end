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
import Link from "next/link";
import { OverlayTrigger, Popover } from "react-bootstrap";

const user =
  typeof window !== "undefined" ? window.localStorage.getItem("id") : {};

export const NavNoLogin = () => {
  const router = useRouter();
  const [users, setUsers] = useState({});

  useEffect(() => {
    setUsers(user);
    console.log(user);
  }, [user]);

  const logout = async () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("id");
    router.push("/login");
  };

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  const popoverClick = (
    <Popover id="popover-trigger-click" title="Popover bottom">
      {/* <Row>
        {post
          .slice(0, 3)
          .map((post) => (
            <Stack direction="horizontal" gap={3}>
              <img
                src={`https://secondhand-catchy.herokuapp.com/api/v1/notification/:userid}`}
                alt=""
                className="d-flex notif1"
              />
              <Stack>
                <p className="notif2 d-flex">{post.message}</p>
                <p className="notif3">{post.name}</p>
              </Stack>
              <p className="ms-auto fw-bold text-black">{post.createdAt}</p>
            </Stack>
          ))
          .reverse(
            <Stack direction="horizontal" gap={3}>
              <div className="text-center">
                Whoops! You have no notifications.
              </div>
            </Stack>
          )}
      </Row> */}
      <div className="d-flex notif1">
        <img src="../images/image-casio1.png"></img>
        <div>
          <div className="notif2 d-flex">
            <div className="me-4">Penawaran produk</div>
            <div>20 Apr, 14:04</div>
            <img src="../images/ellipse.png"></img>
          </div>
          <div className="notif3">Jam tangan cassio</div>
          <div className="notif3">Rp.250.000</div>
          <div className="notif3">Ditawar Rp 200.000</div>
        </div>
        <style jsx>{`
          .notif1 {
            margin: 10px 0 0 10px;
          }
          .notif1 img {
            width: 48px;
            height: 48px;
            border-radius: 12px;
          }
          .notif2 {
            height: 14px;
            font-family: "Poppins";
            font-style: normal;
            font-size: 10px;
            color: #8a8a8a;
            margin-left: 10px;
          }
          .notif2 img {
            width: 7px;
            height: 7px;
            margin-top: 4px;
            margin-right: 10px;
            margin-left: 8px;
            background: #fa2c5a;
          }
          .notif3 {
            margin-left: 10px;
          }
        `}</style>
      </div>
      <hr />
      <div className="d-flex notif1">
        <img src="../images/image-casio1.png"></img>
        <div>
          <div className="notif2 d-flex">
            <div className="me-3">Berhasil di terbitkan</div>
            <div>19 Apr, 12:00</div>
            <img src="../images/ellipse.png"></img>
          </div>
          <div className="notif3">Jam tangan cassio</div>
          <div className="notif3 mb-3">Rp.250.000</div>
        </div>
        <style jsx>{`
          .notif1 {
            margin: 10px 0 0 10px;
          }
          .notif1 img {
            width: 48px;
            height: 48px;
            border-radius: 12px;
          }
          .notif2 {
            height: 14px;
            font-family: "Poppins";
            font-style: normal;
            font-size: 10px;
            color: #8a8a8a;
            margin-left: 10px;
          }
          .notif2 img {
            width: 7px;
            height: 7px;
            margin-top: 4px;
            margin-right: 6px;
            margin-left: 8px;
            background: #fa2c5a;
          }
          .notif3 {
            margin-left: 10px;
          }
        `}</style>
      </div>
    </Popover>
  );

  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div className={styles.box1}>
            <NavbarBrand href="/">
              <img
                src="/images/Secondhandlogo.png"
                alt="logo"
                width="135px"
                height="45px"
              />
            </NavbarBrand>

            {/* <Form.Group className={styles.search}>
              <input type="search" placeholder="Cari di sini ..." aria-label="Search" className={styles.formsearch}/>
              <button type="search" className={styles.btnsearch}><Search className={styles.iconsearch}/></button>
            </Form.Group> */}
          </div>
          {users > 0 ? (
            <Navbar>
              <ButtonGroup aria-label="Basic example" className="">
                <Button variant="outline-light" href="#">
                  <img src="../images/fi_list.png"></img>
                </Button>
                <div>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popoverClick}
                  >
                    <Button variant="outline-light">
                      <img src="../images/fi_bell.png" className="icon"></img>
                    </Button>
                  </OverlayTrigger>
                </div>
                <Link href={"/profile"}>
                  <Button variant="outline-light" href="#">
                    <img src="../images/fi_user.png"></img>
                  </Button>
                </Link>
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
            <div className="row">
              <Button href="/login" className={styles.btn}>
                <img
                  src="/images/fi_log-in.png"
                  alt="icon"
                  width="23px"
                  height="23px"
                />
                <p className={styles.txt}>Masuk</p>
              </Button>
              <Button href="/register" className={styles.btn}>
                <img
                  src="/images/iconregister.png"
                  alt="icon"
                  width="23px"
                  height="23px"
                />
                <p className={styles.txt}>Register</p>
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};
