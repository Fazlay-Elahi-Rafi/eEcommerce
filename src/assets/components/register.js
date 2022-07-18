import React, { useState } from "react";
import { Link } from "react-router-dom";

import img from "../img/auth.jpg";
import logo from "../img/logo.png";
import Social from "./social";

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const inpFun = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
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
                            I am glad to see you again! Get access to your
                            Orders, Wishlist and Recommendations.
                          </p>
                        </div>
                        <div className="register__card-body--bottom">
                          <span className="register__card-body--span">
                            Already have an account?
                          </span>
                          <Link
                            to="/login"
                            className="register__card-body--link"
                          >
                            sing in
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-11 col-sm-10 col-md-7 col-lg-5 col-xxl-4 m-auto my-4 my-lg-auto">
              <h1 className="register__title">register</h1>

              <form className="" encType="multipart/form-data">
                <div className="mb-3">
                  <label htmlFor="name" className="register__sub">
                    name
                  </label>
                  <input
                    className="form-control register__inp"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={state.name}
                    onChange={inpFun}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="register__sub">
                    email
                  </label>
                  <input
                    className="form-control register__inp"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={state.email}
                    onChange={inpFun}
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
                    value={state.password}
                    onChange={inpFun}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm password" className="register__sub">
                    confirm password
                  </label>
                  <input
                    className="form-control register__inp"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPass"
                    value={state.confirmPass}
                    onChange={inpFun}
                  />
                </div>

                <div className="register__forgot">
                  <Link to="/" className="register__sub register__forgot-text">
                    forgot password
                  </Link>
                </div>
                <div className="register__button">
                  <input
                    type="submit"
                    value={"register"}
                    className="btn register__button-btn form-control"
                  />
                </div>
              </form>

              <Social />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
