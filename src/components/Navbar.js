import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoMain = () => {
    navigate("/");
  };
  const search = (event) => {
    //console.log(event.key);
    if (event.key == "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="container mt-5">
      <div
        className="cursor d-flex justify-content-end align-items-center"
        onClick={gotoLogin}
      >
        <i className="fas fa-user-alt"></i>
        {authenticate ? (
          <div
            onClick={() => {
              setAuthenticate(false);
            }}
          >
            <span>로그아웃</span>
          </div>
        ) : (
          <div
            onClick={() => {
              setAuthenticate(true);
            }}
          >
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <img
          onClick={gotoMain}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/800px-Zara_Logo.svg.png"
        />
      </div>
      <div className="d-flex mt-4">
        <ul className="d-flex flex-grow-1 justify-content-center align-items-center">
          {menuList.map((item) => {
            //map 함수에는 세트로 return 들어가야함
            return (
              <li key={item} className="px-2">
                {item}
              </li>
            );
          })}
        </ul>
        <div>
          <i className="fas fa-search"></i>
          <input
            className="ms-2"
            type="text"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
