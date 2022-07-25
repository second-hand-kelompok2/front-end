import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../styles/NavNoLogin.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Navbar from "react-bootstrap/Navbar";
import Toast from "react-bootstrap/Toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Link from "next/link";

export function NavbarDefault() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/Secondhandlogo.png"></img>
        </Button>
      </Container>
    </Navbar>
  );
}

export function NavbarInfoProfil() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/Secondhandlogo.png"></img>
        </Button>
        <Container>
          <h5 className="text-center">Lengkapi Info Akun</h5>
          <style jsx>{`
            .text-center {
              text-family: "Poppins";
            }
          `}</style>
        </Container>
      </Container>
    </Navbar>
  );
}

export function NavbarInfoPenawar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/navbar.png"></img>
        </Button>
        <Container>
          <h5 className="text-center">Info Penawar</h5>
          <style jsx>{`
            .text-center {
              text-family: "Poppins";
            }
          `}</style>
        </Container>
      </Container>
    </Navbar>
  );
}
export function NavbarProfile() {
  const router = useRouter();

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
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <Stack>
                <p className="m-0 text-black-50">{postStatus}</p>
                <p className="m-0 fw-bold text-black">{post.name}</p>
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
    <Navbar className="box-shadow " bg="light" expand="lg">
      <Container>
        <Navbar>
          <Button variant="outline-light" href="/" className="me-5">
            <img src="../images/Secondhandlogo.png"></img>
          </Button>
          <div className="search-box">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Cari di sini..."
              className="background-#EEEEEE"
            />
            <button className="search-button">
              <img src="../images/fi_search.png"></img>
            </button>
          </div>
          <style jsx>{`
            #search {
              background-color: #eeeeee;
              width: 450px;
            }
            .search-box {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-left: 12px;
              padding-right: 12px;
              height: 42px;
              background: #eeeeee;
              border: 2px solid #f5f5f5;
              box-sizing: border-box;
              border-radius: 24px;
            }
            .search-box .search-button {
              display: flex;
              align-items: center;
              background: none;
              border: none;
              height: 100%;
            }
            .search-box .search-button:focus {
              outline: none;
            }
            .search-box .search-button:hover {
              opacity: 40%;
            }
            .search-box input {
              width: 75%;
              height: 100%;
              border: none;
              padding-left: 8px;
            }
            .search-box input:focus {
              outline: none;
            }
            .search-box select {
              align-self: flex-end;
              max-width: 120px;
              height: 100%;
              text-transform: uppercase;
              font-style: normal;
              font-weight: 900;
              font-size: 10px;
              letter-spacing: 1px;
              color: #b2b2b2;
              border: none;
              background: none;
            }
            .search-box select:focus {
              outline: none;
            }
          `}</style>
          {/* <Button variant="outline-light" href="/" className='me-5'>
                        <img src="images/navbar.png"></img>
                    </Button>
                    <Form.Group className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Cari di sini..."
                            aria-label="Search"
                            
                        />
                        <Button variant="outline-success">
                            <img src="images/fi_search.png"></img>
                        </Button>
                    </Form.Group> */}
        </Navbar>
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
      </Container>
    </Navbar>
  );
}
