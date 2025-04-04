import React from "react";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="">
      <div className="n-content xl:w:xlarge">
        <div>
          <label className="n-icon n-icon:list n-icon-size:6 mr:3 cursor:pointer">
            <span>사이드메뉴버튼</span>
            <input className="d:none n-aside-hider" type="checkbox" />
          </label>
        </div>
        <h1 className="n-heading:2">
          <Link href="/">Rland</Link>
        </h1>
        <nav className="ml:auto">
          <h1 className="d:none">헤더메뉴</h1>
          <ul className="n-bar">
            <li>
              <Link className="n-btn" href="">
                대시보드
              </Link>
            </li>
            <li>
              <Link className="n-btn" href="">
                로그아웃
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
