"use client";
import { ReactNode } from "react";
import Basket from "./components/Basket";

type LayoutProps = {
  children: ReactNode;
};

export default function MenuLayout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Basket />
    </>
  );
}
