import React from "react";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import css from "./Customers.module.css";
import imageBosh from "./images/bosh.png";
import imageBuh from "./images/buh.png";
import imageAudi from "./images/audi.png";
import imageDniproM from "./images/dniprom.png";
import { nanoid } from "nanoid";

const customers = [
  {
    title: "Bosh",
    image: imageBosh,
  },
  {
    title: "Zakhidnyi Buh",
    image: imageBuh,
  },
  {
    title: "Audi",
    image: imageAudi,
  },
  {
    title: "Dnipro M",
    image: imageDniproM,
  },
];

function Customers() {
  return (
    <section id="customers" className={css.customersSection}>
      <div className="container">
        <div className={css.titleContainer}>
          <SectionTitle title="Our satisfied customers" alignCenter="true" />
        </div>

        <div className={css.content}>
          {customers.map((customer) => (
            <div key={nanoid()} className={css.customerCard}>
              <p className={css.customerTitle}>{customer.title}</p>
              <img
                className={css.customerImage}
                src={customer.image}
                alt={customer.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
