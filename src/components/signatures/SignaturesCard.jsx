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
import { LuBookMinus } from "react-icons/lu";

const SignaturesCard = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const [selected, setSelected] = React.useState("Matematicas");

  function handleDropdown() {
    setDropdown(!dropdown);
  }
  return (
    <div className="bg-base-light-100 dark:bg-base-dark-100 h-[600px] w-[900px] flex flex-col p-4 rounded-r-2xl">
      <h1 className="text-gray-500 text-lg font-semibold text-center">
        Mis asignaturas
      </h1>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-neutral-300 text-sm font-semibold">
              Añadir asignaturas
            </h1>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <label className="block bg-slate-300 dark:bg-button hover:bg-base-90 p-2 text-center rounded-xl mb-1 text-base font-normal text-gray-900 dark:text-gray-50 min-w-[199px] min-h-[42px] cursor-pointer shadow-md">
                  Matematicas
                </label>
                <button className="p-1 rounded-full w-8 h-8">
                  <CiEdit className="text-warning text-3xl hover:scale-105" />
                </button>
              </div>
            </div>
            <div className="flex">
              <span
                onClick={handleDropdown}
                className="hover:opacity-70 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer"
              >
                <FaDna className="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-40 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Asignatura"
                value="Historia"
              />
              <div className="flex gap-2 ml-2">
                <button className="">
                  <FaRegSave className="text-2xl text-green-500" />
                </button>
                <button className="">
                  <FaRegTrashCan className="text-2xl text-red-500" />
                </button>
              </div>
            </div>
            <div className="flex">
              <span
                onClick={handleDropdown}
                className="hover:opacity-70 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer"
              >
                <FaDna className="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-40 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nueva Asignatura"
              />
              <div className="flex gap-2 ml-2">
                <button className="">
                  <FaRegSave className="text-2xl text-green-500 hover:scale-110 transition ease-in-out" />
                </button>
                <button className="">
                  <HiMiniXMark className="text-2xl text-gray-400 hover:scale-110" />
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
            <IoMdAddCircleOutline className="text-green-500 text-end text-3xl" />
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
