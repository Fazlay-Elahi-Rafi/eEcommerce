import React from "react";
import "../../css/profile.css";

import { IoIosArrowForward } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <section className="profile">
        <div className="container">
          <div className="row text-center">
            <div className="">
              <h1 className="profile__title">my account</h1>
            </div>

            <div className="">
              <ul className="profile__list">
                <li>
                  <a href="#">
                    home <IoIosArrowForward className="profile__list-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="profile__info">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-11 col-md-4 col-lg-3 m-auto m-sm-0">
              <ul className="profile__info-list">
                <li>
                  <Link to="/" className="profile__info-list--active">
                    dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/list" className="profile__info-list--a">
                    orders
                  </Link>
                </li>
                <li>
                  <Link to="/info" className="profile__info-list--a">
                    infomation
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="profile__info-list--a">
                    address
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="profile__info-list--a">
                    account details
                  </Link>
                </li>
                <li>
                  <a className="profile__info-list--a" href="#">
                    wishlist
                  </a>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
