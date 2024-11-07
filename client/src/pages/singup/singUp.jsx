import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./singUp.css";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emptyError, setEmptyError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset các thông báo
    setEmptyError("");
    setLoginError("");
    setSuccessMessage("");

    if (!email || !password) {
      setEmptyError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setSuccessMessage("Đăng nhập thành công!");
  };

  return (
    <div
      className="khung-dang-nhap"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hop-dang-nhap">
        <h2 className="tieu-de-dang-nhap">ĐĂNG KÍ</h2>

        <div className="khung-nut-mxh">
          <button className="nut-mxh nut-facebook">
            {/* <span className="material-icons">facebook</span> */}
            <span className="text-nut-mxh">Facebook</span>
          </button>
          <button className="nut-mxh nut-google">
            {/* <span className="material-icons">google</span> */}
            <span className="text-nut-mxh">Google</span>
          </button>
        </div>

        <div className="duong-phan-cach">
          <span className="chu-phan-cach">Hoặc</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="nhom-truong-nhap">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              className="o-nhap-lieu"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="nhom-truong-nhap">
            <input
              type="email"
              placeholder="Email"
              className="o-nhap-lieu"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="nhom-truong-nhap">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="o-nhap-lieu"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="nhom-truong-nhap">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="o-nhap-lieu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="nhom-truong-nhap">
            <input
              type="password"
              placeholder="Xác nhận lại mật khẩu"
              className="o-nhap-lieu"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {emptyError && <p className="thong-bao-loi">{emptyError}</p>}
          {loginError && <p className="thong-bao-loi">{loginError}</p>}

          <button type="submit" className="nut-dang-nhap">
            Đăng kí
          </button>

          {successMessage && (
            <p className="thong-bao-thanh-cong">{successMessage}</p>
          )}

          <div className="khung-dang-ky">
            <span>Bạn đã có tài khoản? </span>
            <Link to="/login" className="lien-ket-dang-ky">
              Đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUp;
