import React from "react";
import { CiCalculator2, CiEdit, CiPill } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import GradesDataTable from "./GradesDataTable";
import { FaBook, FaDna, FaRegSave } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { GiSkeletalHand } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import {
  LuBookMinus,
  LuPencilLine,
  LuPlus,
  LuSave,
  LuTrash,
} from "react-icons/lu";

const SignaturesCard = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const [selected, setSelected] = React.useState("Matematicas");

  function handleDropdown() {
    setDropdown(!dropdown);
  }
  return (
    <div className="bg-base-light-200 dark:bg-base-dark-200 h-[600px] w-[900px] flex flex-col p-4 rounded-r-2xl">
      <h1 className="text-neutral-light dark:text-neutral-content-dark text-lg font-bold text-center">
        Mis asignaturas
      </h1>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-neutral-light dark:text-neutral-content-dark text-sm font-semibold">
              Añadir asignaturas
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <label className="block bg-base-light-100 dark:bg-base-dark-100 hover:bg-base-90 p-2 text-center rounded-xl mb-1 text-base font-normal text-base-light-content dark:text-base-dark-content min-w-[199px] min-h-[42px] cursor-pointer shadow-md">
                  Matematicas
                </label>
                <button className="btn btn-circle btn-outline btn-sm">
                  <LuPencilLine className="text-warning-light dark:text-warning-dark w-4 h-4 hover:scale-105" />
                </button>
              </div>
            </div>
            <div className="flex">
              <span
                onClick={handleDropdown}
                className="hover:opacity-70 inline-flex items-center px-3 text-sm text-gray-900 bg-base-light-300 dark:bg-base-dark-100 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:text-gray-400 dark:border-gray-600 cursor-pointer"
              >
                <FaDna className="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-base-light-200 dark:bg-base-dark-200 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-40 text-sm border-gray-300 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Asignatura"
                value="Historia"
                disabled={false}
              />
              <div className="flex gap-2 ml-2 mt-1">
                <button className="btn btn-circle btn-outline btn-sm">
                  <LuSave className="w-4 h-4 text-success-light dark:text-success-dark" />
                </button>
                <button className="btn btn-circle btn-outline btn-sm">
                  <LuTrash className="w-4 h-4 text-error-light dark:text-error-dark" />
                </button>
              </div>
            </div>
            <div className="flex">
              <span
                onClick={handleDropdown}
                className="hover:opacity-70 inline-flex items-center px-3 text-sm text-gray-900 bg-base-light-300 dark:bg-base-dark-100 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:text-gray-400 dark:border-gray-600 cursor-pointer"
              >
                <FaDna className="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-base-light-200 dark:bg-base-dark-200 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-40 text-sm border-gray-300 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nueva Asignatura"
              />
              <div className="flex gap-2 ml-2 mt-1">
                <button className="btn btn-circle btn-outline btn-sm">
                  <LuSave className="w-4 h-4 text-success-light dark:text-success-dark" />
                </button>
                <button className="btn btn-circle btn-outline btn-sm">
                  <LuTrash className="w-4 h-4 text-error-light dark:text-error-dark" />
                </button>
              </div>
            </div>
            <div
              id="dropdown"
              className={`z-10 ${
                dropdown ? "" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <div className="flex items-center justify-center hover:bg-gray-400">
                  <LuBookMinus />
                </div>
                <div className="flex items-center justify-center hover:bg-gray-400">
                  <FaDna />
                </div>
                <div className="flex items-center justify-center hover:bg-gray-400">
                  <CiCalculator2 />
                </div>
                <div>
                  <CiPill />
                </div>
                <div>
                  <GiSkeletalHand />
                </div>
                <div>
                  <IoBookOutline />
                </div>
                <div>7</div>
                <div>8</div>
                <div className="col-start-4 row-start-3">9</div>
                <div className="col-start-3 row-start-3">10</div>
                <div className="col-start-2 row-start-3">11</div>
                <div className="col-start-1 row-start-3">12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
              </div>
            </div>
            <button className="btn btn-circle btn-outline">
              <LuPlus className="text-success-light dark:text-success-dark w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <GradesDataTable />
        </div>
      </div>
    </div>
  );
};

export default SignaturesCard;
