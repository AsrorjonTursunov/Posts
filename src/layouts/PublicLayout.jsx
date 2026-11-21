import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";

function PublicLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />{" "}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
