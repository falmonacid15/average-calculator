import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { LuTrash, LuTrash2 } from "react-icons/lu";

const GradesInput = ({ inputValue, deleteInput, index }) => {
  const [weighing, setWeighing] = useState("");
  const [score, setScore] = useState("");

  const weighingHandleChange = (event) => {
    const inputValue = event.target.value;
    // Verificar si el valor es una cadena vacía o numérico y está dentro del rango
    if (
      inputValue === "" ||
      (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 99)
    ) {
      setWeighing(inputValue);
    }
  };

  const scoreHandleChange = (event) => {
    const inputValue = event.target.value;
    // Verificar si el valor es una cadena vacía o numérico y está dentro del rango
    if (
      inputValue === "" ||
      (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 20)
    ) {
      setScore(inputValue);
    }
  };

  useEffect(() => {}, []);

  return (
    <div id="grades-input" className="flex justify-center py-2">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold mr-4 mt-5 text-neutral-800 dark:text-neutral-100">
          {index + 1 || ""}
        </h1>
        <div id="score">
          <label
            for="score-input"
            className="block mb-1 text-sm font-normal text-neutral-800 dark:text-neutral-100"
          >
            Nota
          </label>
          <input
            type="text"
            id="score-input"
            aria-describedby="helper-text-explanation"
            className="bg-base-light-300 dark:bg-base-dark-300 border border-gray-300 text-gray-900 dark:text-neutral-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5  dark:border-gray-600 placeholder-neutral-200 dark:placeholder-neutral-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0.0"
            required
            value={score}
            onChange={scoreHandleChange}
          />
        </div>
        <div id="weighing">
          <label
            for="weighing-input"
            className="block mb-1 text-sm font-normal text-neutral-800 dark:text-neutral-100"
          >
            Ponderacion
          </label>
          <input
            type="text"
            id="weighing-input"
            aria-describedby="helper-text-explanation"
            className="bg-base-light-300 dark:bg-base-dark-300 border border-gray-300 text-gray-900 dark:text-neutral-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5  dark:border-gray-600 placeholder-neutral-200 dark:placeholder-neutral-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            value={weighing}
            onChange={weighingHandleChange}
            required
          />
        </div>
        <button
          className="mt-5 btn btn-circle btn-outline btn-sm"
          onClick={() => deleteInput(index)}
        >
          <LuTrash className="text-error-light dark:text-error-dark" />
        </button>
      </div>
    </div>
  );
};

export default GradesInput;
