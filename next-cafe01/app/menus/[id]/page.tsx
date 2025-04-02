import React from "react";
import { notFound } from "next/navigation";

interface IMenus {
  id: number;
  korName: string;
  engName: string;
  price: number;
  description: string;
  createdAt: string;
  categoryId: number;
  regMemberId: string;
  deletedAt: object;
  updatedAt: string;
  img: string;
}

async function getMenu(id: string) {
  try {
    const res = await fetch(`https://next15-ts-ssr.new-cafe.com/api/menus/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching menu:", error);
    return null;
  }
}

export default async function MenuDetail({
  params,
}: {
  params: { id: string };
}) {
  const result = await getMenu(params.id);
  const menu: IMenus = result.menus[1];

  if (!menu) {
    notFound();
  }

  return (
    <main>
      <h1>{menu.korName}</h1>
      <p>가격: {menu.price}원</p>
      <p>설명: {menu.description}</p>
      <button>장바구니에 추가</button>
    </main>
  );
}