import { Col, Row, Image, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { RegisterImage } from "../components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();


  const onSubmit = async (data) => {
    const { name, email, password, confPassword } = data;
    const res = await axios
      .post("https://secondhand-catchy.herokuapp.com/api/v1/users/register", {
        name,
        email,
        password,
        confPassword,
      })
      .then((val) => {
        toast.success("Register Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push({ pathname: "/login" });
      })
      .catch((err) => {
        toast.error("Register Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Row>
      <RegisterImage />
      <Col md={6} className="my-auto">
        <div className="mx-auto w-75">
          <h1 className="fw-bold">Daftar</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name" className="mt-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                className="custom-rounded p-2"
                {...register("name")}
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                className="custom-rounded p-2"
                {...register("email")}
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                className="custom-rounded p-2"
                {...register("password")}
              />
            </Form.Group>
            <Form.Group controlId="confPassword" className="mt-3">
              <Form.Label>confirmPassword</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                className="custom-rounded p-2"
                {...register("confPassword")}
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <button
                className="btn text-white purple-bg custom-rounded p-2"
                type="submit"
              >
                Daftar
              </button>
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="d-inline">Sudah punya akun? </p>
            <Link href="/login">
              <a className="purple-text fw-bold text-decoration-none">
                Masuk di sini
              </a>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
