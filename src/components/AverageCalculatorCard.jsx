import { useState } from "react";
import GradesInput from "./GradesInput";
import { LuPlus } from "react-icons/lu";

const AverageCalculatorCard = () => {
  const [scoresInputs, setScoresInputs] = useState([]);

  function deleteScoreInput(index) {
    setScoresInputs((prevState) => prevState.filter((_, i) => i !== index));
  }

  function handleAddNewInput({}) {
    setScoresInputs((prevState) => [...prevState, { score: 0, weighing: 0 }]);
  }

  function handleChangeScoreInput(score, weighing, index) {
    setScoresInputs((prevState) => {
      console.log("prev", prevState[index], index);
      prevState[index] = { score: score, weighing: weighing };
      return [...prevState];
    });
  }

  console.log(scoresInputs);
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
      <div id="calculator" className="p-2 flex-col grades-input">
        {Array.isArray(scoresInputs) &&
          scoresInputs.map((input, index) => (
            <GradesInput
              key={index}
              inputValue={input}
              deleteInput={deleteScoreInput}
              index={index}
              handleChange={handleChangeScoreInput}
            />
          ))}
      </div>
      <div id="add-input-button">
        <button
          onClick={handleAddNewInput}
          className="btn btn-circle btn-outline"
        >
          <LuPlus className="text-success-light dark:text-success-dark w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AverageCalculatorCard;
