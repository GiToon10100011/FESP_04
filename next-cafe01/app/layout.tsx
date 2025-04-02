"use client"
import { ReactNode } from "react";
import RootHeader from "./components/RootHeader";
import RootFooter from "./components/RootFooter";
// import './globals.css';

// export const metadata = {
//   title: 'Next Cafe',
//   description: 'A modern coffee shop experience',
// };

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <RootHeader />
        {children}
        <RootFooter />
      </body>
    </html>
  );
};

export default RootLayout;
