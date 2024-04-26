import React, { useEffect, useState } from "react";
import GradesInput from "./GradesInput";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const AverageCalculatorCard = () => {
  const [scoresInputs, setScoresInputs] = useState([]);

  const arraytest = Array(4);

  const minInputs = 2;
  const maxInputs = 10;

  const [inputCounter, setInputCounter] = useState(0);

  function inputCounterHandler() {
    setInputCounter((prevState) => prevState + 1);
  }

  function deleteScoreInput(index) {
    setScoresInputs((prevState) => prevState.filter((_, i) => i !== index));
    setInputCounter(inputCounter - 1);
  }

  function handleInputValue({ score, weighing }) {
    setScoresInputs((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        score: score,
        weighing: weighing,
      },
    ]);
  }

  return (
    <div
      id="average-calculator-card"
      className="bg-base-light-200 dark:bg-base-dark-200 bg-base h-[600px] w-[400px] flex flex-col items-center p-4 rounded-l-2xl overflow-auto"
    >
      <div id="average-calculator-title" className="flex flex-col items-center">
        <h1 className="text-neutral-light dark:text-neutral-content-dark text-lg font-bold">
          Mis Notas
        </h1>
        <p className="text-neutral-light dark:text-neutral-content-dark text-sm">
          Ingrese sus notas
        </p>
      </div>
      <div id="calculator" className="p-2 flex-col">
        <GradesInput deleteInput={deleteScoreInput} />
      </div>
      <div id="add-input-button">
        <button
          onClick={inputCounterHandler}
          className="btn btn-circle btn-outline"
        >
          <LuPlus className="text-success-light dark:text-success-dark w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AverageCalculatorCard;
