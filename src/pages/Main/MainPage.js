import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Faq from "../../components/Faq/Faq";
import Electricity from "../../components/Electricity/Electricity";
import Cases from "../../components/Cases/Cases";
import About from "../../components/About/About";
import ContactUs from "../../components/ContactUs/ContactUs";
import Customers from "../../components/Customers/Customers";

function MainPage() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <Customers />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default MainPage;
