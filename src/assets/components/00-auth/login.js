import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import img from "../../img/auth.jpg";
import logo from "../../img/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [google, setGoogle] = useState(true);
  const [apple, setApple] = useState(false);
  const [fb, setFb] = useState(false);
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");


  return (
    <section className="register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="card register__card">
              <img
                className="img-fluid register__card-img"
                src={img}
                alt="food"
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <div className="register__card-layer">
                  <div className="col-10 m-auto">
                    <div className="register__card-logo">
                      <a href="#">
                        <img
                          className="img-fluid register__card-logo--img"
                          src={logo}
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="register__card-body">
                      <div className="register__card-body--middle">
                        <span className="register__card-body--textSmall">
                          welcome to
                        </span>

                        <span className="register__card-body--text">
                          my e-commerce website
                        </span>

                        <p className="register__card-body--para m-0">
                          I am glad to see you again! Get access to your Orders,
                          Wishlist and Recommendations.
                        </p>
                      </div>
                      <div className="register__card-body--bottom">
                        <span className="register__card-body--span">
                          Have'n any account?
                        </span>
                        <Link
                          to="/"
                          className="register__card-body--link"
                        >
                          register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xxl-4 m-auto my-4 my-lg-auto">
            <h1 className="register__title">login</h1>
            <form className="">
              <div className="mb-3">
                <label htmlFor="email" className="register__sub">
                  email
                </label>
                <input
                  className="form-control register__inp"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="register__sub">
                  password
                </label>
                <input
                  className="form-control register__inp"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={userPass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <div className="register__forgot">
                <a href="#" className="register__sub register__forgot-text">
                  forgot password
                </a>
              </div>
              <div className="register__button">
                <input
                  type="submit"
                  value={"login"}
                  className="btn register__button-btn form-control"
                />
              </div>
            </form>
            <span className="register__or">or</span>
            <div className="register__social">
              <ul className="register__social-ul">
                <li>
                  <a
                    href="#"
                    className={`register__social-ul--link register__social-ul--g form-control ${
                      google ? "register__social-ul--active" : ""
                    }`}
                    onMouseOver={(e) => setGoogle(true)}
                  >
                    <BsGoogle
                      className={`register__social-ul--icon ${
                        google ? "mx-2" : ""
                      }`}
                    />
                    <span className="d-none d-sm-block">
                      {google ? "google" : ""}
                    </span>
                  </a>
                </li>
                <li className="my-3 my-sm-0">
                  <a
                    href="#"
                    className={`register__social-ul--link register__social-ul--a form-control ${
                      apple ? "register__social-ul--active" : ""
                    }`}
                    onMouseOver={(e) => {
                      setApple(true);
                      setGoogle(false);
                    }}
                    onMouseOut={(e) => {
                      setApple(false);
                      setGoogle(true);
                    }}
                  >
                    <BsApple
                      className={`register__social-ul--icon ${
                        apple ? "mx-2" : ""
                      }`}
                    />
                    <span className="d-none d-sm-block">
                      {apple ? "apple" : ""}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`register__social-ul--link register__social-ul--f form-control ${
                      fb ? "register__social-ul--active" : ""
                    }`}
                    onMouseOver={(e) => {
                      setGoogle(false);
                      setFb(true);
                    }}
                    onMouseOut={(e) => {
                      setFb(false);
                      setGoogle(true);
                    }}
                  >
                    <FaFacebookF
                      className={`register__social-ul--icon ${
                        fb ? "mx-2" : ""
                      }`}
                    />
                    <span className="d-none d-sm-block">
                      {fb ? "facebook" : ""}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
