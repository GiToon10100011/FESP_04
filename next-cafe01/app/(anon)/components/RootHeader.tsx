"use client";
import Link from "next/link";
import React from "react";
import styles from "./RootHeader.module.scss";

const RootHeader = () => {
  return (
    <header className={styles["n-header"]}>
      <h1>카페 이름</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/menus">메뉴</Link>
          </li>
          <li>
            <Link href="/admin">dashboard</Link>
          </li>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RootHeader;
