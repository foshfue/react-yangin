import React from "react";
import Navigation from "./pages/Navigation";
import CompaniesCart from "./pages/CompaniesCart";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const first = { name: "Projects", href: "#", current: false };
const second = { name: "Project Nero", href: "#", current: true };
export default function Companies() {
  return (
    <>
      <Header />
      <Navigation first={first} second={second} />
      <CompaniesCart
    </>
  );
}
