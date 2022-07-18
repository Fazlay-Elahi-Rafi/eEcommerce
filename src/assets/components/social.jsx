import React from "react";

import { BsGoogle, BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Social() {
  return (
    <>
      <span className="register__or">or</span>
      <div className="register__social">
        <ul className="register__social-ul">
          <li>
            <a
              href="#"
              className="register__social-ul--link register__social-ul--g register__social-ul--active form-control"
            >
              <BsGoogle className="register__social-ul--icon mx-2" />
              <span className="d-none d-sm-block">google</span>
            </a>
          </li>
          <li className="my-3 my-sm-0">
            <a
              href="#"
              className="register__social-ul--link register__social-ul--a form-control"
            >
              <BsApple className="register__social-ul--icon mx-2" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="register__social-ul--link register__social-ul--f form-control"
            >
              <FaFacebookF className="register__social-ul--icon mx-2" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
