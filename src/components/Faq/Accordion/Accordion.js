import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import css from "./Accordion.module.css";
import { nanoid } from "nanoid";

const questions = [
  {
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
];

const Accordion = () => {
  const [clicked, setClicked] = useState(0);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className={css.accordionSection}>
      {questions.map((item, index) => (
        <div key={nanoid()}>
          <div className={css.questionContainer} onClick={() => toggle(index)}>
            <span className={css.questionIco}>
              {clicked === index ? <FiMinus /> : <FiPlus />}
            </span>
            <p className={css.question}>{item.question}</p>
          </div>
          {clicked === index ? (
            <div className={css.answerContainer}>
              <p className={css.answer}>{item.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
