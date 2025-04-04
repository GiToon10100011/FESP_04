"use client";
import { ReactNode } from "react";
import RootHeader from "./components/RootHeader";
import RootFooter from "./components/RootFooter";

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <RootHeader />
      <main>{children}</main>
      <RootFooter />
    </div>
  );
};

export default RootLayout;
