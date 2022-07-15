import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Navbar from 'react-bootstrap/Navbar';
import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';

export function NavbarDefault() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Button variant="outline-light" href="/" className='me-5'>
                    <img src="../images/navbar.png"></img>
                </Button>
            </Container>
        </Navbar>
    );
}

export function NavbarInfoProfil() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Button variant="outline-light" href="/" className='me-5'>
                    <img src="../images/navbar.png"></img>
                </Button>
                <Container>
                    <h5 className='text-center'>Lengkapi Info Akun</h5>
                    <style jsx>{`
                        .text-center {
                            text-family: 'Poppins'
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
                <Button variant="outline-light" href="/" className='me-5'>
                    <img src="../images/navbar.png"></img>
                </Button>
                <Container>
                    <h5 className='text-center'>Info Penawar</h5>
                    <style jsx>{`
                        .text-center {
                            text-family: 'Poppins'
                        }
                    `}</style>
                </Container>
            </Container>
        </Navbar>
    );
}

export function NavbarProfile() {
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);
	return (
		<Navbar className="box-shadow " bg="light" expand="lg">
			<Container>
				<Navbar>
                <Button variant="outline-light" href="/" className='me-5'>
                    <img src="../images/navbar.png"></img>
                </Button>
                <div className="search-box">
                    <input
                        id="search"
                        type="text"
                        name="search"
                        placeholder="Cari di sini..."
                        className='background-#EEEEEE'
                    />
                    <button className="search-button">
                        <img src="../images/fi_search.png"></img>
                    </button>
                </div>
                <style jsx>{`
                    #search {
                        background-color: #EEEEEE;
                        width: 450px;
                    }
                    .search-box {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding-left: 12px;
                        padding-right: 12px;
                        height: 42px;
                        background: #EEEEEE;
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
                    <ButtonGroup aria-label="Basic example" className=''>
                        <Button variant="outline-light" href="#">
                            <img src="../images/fi_list.png"></img>
                        </Button>
                        <div>
                            <Button variant="outline-light" onClick={toggleShow}>
                                <img src="../images/fi_bell.png"></img>
                            </Button>
                            <div className='ToastContainer'>
                                <Toast className='Toast' onClose={() => setShow(false)} show={show}>
                                    <Toast.Body>
                                        Woohoo, Belum ada notifikasi !!
                                    </Toast.Body>
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
                </Navbar>
			</Container>
		</Navbar>
    );
};
