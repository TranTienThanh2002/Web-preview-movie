import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export const Login = () => {
  return (
    <>
      <div className="box-login">
        <div className="login">
          <form action="">
            <div className="content">
              <div className="item">
                <label>Username or Email Address</label>
                <input type="text" name="username" required />
              </div>
              <div className="item">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <div className="item">
                <button type="submit" className="btn-submit">
                  Sign in
                </button>
              </div>
              <div className="item">
                <div className="item-content">
                  <div className="grid-item item-left">
                    <input
                      type="checkbox"
                      value="none"
                      name="remember-me"
                      className="remember-me"
                    />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <div className="grid-item item-right" >
                    <Link>Lost Your Password?</Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <p>
                    By signing in, you agree to
                    <Link>our terms and conditions</Link>
                    and our
                    <Link>privacy policy</Link>
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
