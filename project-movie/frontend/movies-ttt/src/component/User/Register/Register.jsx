import React from "react";
import { Link } from "react-router-dom";
import './Register.css'
export const Register = () => {
  return (
    <>
      <div className="box-register">
        <div className="register">
          <form action="">
            <div className="content">
              <div className="item">
                <label>Username</label>
                <input type="text" name="username" required />
              </div>
              <div className="item">
                <label>Email Address</label>
                <input type="email" name="email" required />
              </div>
              <div className="item">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <div className="item">
                <button type="submit" className="btn-submit">
                  Sign up
                </button>
              </div>

              <div className="item">
                <div className="text">
                  <p>
                    By creating an account you agree to Noxe's
                    <Link>our terms and conditions</Link>
                    and our
                    <Link>privacy policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
