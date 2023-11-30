import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";

function ContactUs() {
  return (
    <section id="contact-us">
      <SectionTitle title="Contact Us" alignCenter="true" />
      <ContactForm />
    </section>
  );
}

export default ContactUs;
