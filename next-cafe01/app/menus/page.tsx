"use client";
import React from "react";
import Link from "next/link";
const Menu = () => {
  return (
    <main>
      <Link href="/menus/1">메뉴1</Link>
      <Link href="/menus/2">메뉴2</Link>
      <Link href="/menus/3">메뉴3</Link>
    </main>
  );
};

export default Menu;
