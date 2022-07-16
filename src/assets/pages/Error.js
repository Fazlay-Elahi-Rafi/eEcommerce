import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import img from "../img/404.png";

export default function Error() {
  return (
    <>
      <section className="error">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 m-auto">
              <div className="">
                <img src={img} className="img-fluid error__img" alt="error image" />
              </div>
              <div className="mb-5">
                <Link to="/" className="error__btn btn">
                  <BiArrowBack className="error__icon" />
                  back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
