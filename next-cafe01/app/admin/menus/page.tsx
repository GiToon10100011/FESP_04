"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenuListDto } from "@/application/usecases/admin/menu/dto/MenuListDto";

const Menu = () => {
  const [menus, setMenus] = useState<MenuListDto["menus"]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMenus = async () => {
    try {
      const response = await fetch("/api/admin/menus");
      const { data } = await response.json();
      console.log(data);
      setMenus(data.menus);
      setLoading(false);
    } catch (error) {
      console.error("메뉴를 불러오는데 실패했습니다:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  console.log(menus);

  return (
    <main>
      {loading ? (
        <p>메뉴를 불러오는 중...</p>
      ) : menus?.length > 0 ? (
        menus.map((menu) => (
          <Link key={menu.id} href={`/menus/${menu.id}`}>
            {menu.korName}
          </Link>
        ))
      ) : (
        <p>메뉴가 없습니다.</p>
      )}
    </main>
  );
};

export default Menu;
