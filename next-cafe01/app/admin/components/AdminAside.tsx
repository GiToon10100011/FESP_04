import React from "react";

export default function AdminAside() {
  return (
    <aside className="">
      <header className="n-aside-menu">
        <h1 className="d:none">
          <a href="">관리자 메뉴</a>
        </h1>
        <ul>
          <li className="">
            <a
              className="n-icon n-icon:dashboard n-deco n-deco-pos:top lg:n-deco-pos:left"
              href="/admin"
            >
              대시보드
            </a>
          </li>
        </ul>
      </header>
      <nav className="n-aside-menu">
        <h1>재품관리</h1>
        <ul>
          <li className="active">
            <a
              className="n-icon n-icon:local_cafe n-deco n-deco-pos:top lg:n-deco-pos:left"
              href="/admin/menus"
            >
              메뉴관리
            </a>
          </li>
          <li>
            <a
              className="n-icon n-icon:garage_home n-deco n-deco-pos:top lg:n-deco-pos:left"
              href="/admin/supplies/list.html"
            >
              비품관리
            </a>
          </li>
        </ul>
      </nav>
      <nav className="n-aside-menu">
        <h1>고객관리</h1>
        <ul>
          <li>
            <a
              className="n-icon n-icon:notifications n-deco n-deco-pos:top lg:n-deco-pos:left"
              href="/admin/notice/list.html"
            >
              공지관리
            </a>
          </li>
          <li>
            <a
              className="n-icon n-icon:group n-deco n-deco-pos:top lg:n-deco-pos:left"
              href="/admin/member/list.html"
            >
              회원관리
            </a>
          </li>
        </ul>
      </nav>
      <nav className="n-aside-menu">
        <h1>통계관리</h1>
        <ul>
          <li>
            <a
              className="n-icon n-icon:cardio_load n-deco n-deco-pos:top lg:n-deco-pos:left"
              href=""
            >
              좋아요
            </a>
          </li>
          <li>
            <a
              className="n-icon n-icon:bookmarks n-deco n-deco-pos:top lg:n-deco-pos:left"
              href=""
            >
              찜목록
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
