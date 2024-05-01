import React, { useEffect, useState } from "react";
import { LuTrash } from "react-icons/lu";

const GradesInput = ({ inputValue, deleteInput, index, handleChange }) => {
  const handleChangeInput = (score, weighing, index) => {
    handleChange({ score: score, weighing: weighing }, index);
  };

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
            value={inputValue.score}
            onChange={(e) =>
              handleChangeInput(e.target.value, inputValue.weighing, index)
            }
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
            onChange={handleChangeInput}
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
