import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Opd = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
     <div className="bg-customBlue border-b justify-between border-gray-400 gap-9">
      <nav className="flex space-x-4 p-2">
        <button className="flex-1 p-2 text-center  font-bold hover:bg-blue-300">
          OPD PATIENT REGISTER
        </button>
        <button className="flex-1 p-2 text-center  border-gray-400 font-bold hover:bg-blue-300">
          MEDICAL TEST
        </button>
        <button className="flex-1 p-2 text-center  border-gray-400 font-bold hover:bg-blue-300">
          TREATMENT
        </button>
        <button className="flex-1 p-2 text-center  border-gray-400 font-bold hover:bg-blue-300">
          DOCTOR APPOINTMENT
        </button>
        <button className="flex-1 p-2 text-center   border-gray-400 font-bold hover:bg-blue-300">
          BILLS
        </button>
        <button className="flex-1 p-2 text-center  border-gray-400 font-bold hover:bg-blue-300">
          CASH RECEIPT
        </button>
        <div className="flex-1"></div> {/* For the empty spaces */}
        <div className="flex-1"></div> {/* Add more divs for more empty spaces */}
      </nav>
    </div>
    <div className="p-4 bg-blue-400 h-screen flex justify-center items-center">
        
      <div className="bg-blue-300 p-4 rounded-lg shadow-lg w-full h-full max-w-5xl border-8 border-white overflow-y-scroll">
        <h1 className="text-xl font-bold mb-4">PATIENT DETAILS</h1>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">PATIENT TYPE</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="OPD">OPD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              PATIENT REG. NO.
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Add more fields as needed */}
          <div>
            <label className="block text-sm font-medium">PATIENT NAME</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">URN NO</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Fathers/Husband Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">GUARDIANS' NAME</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">RELATION</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">PATIENT'AGE</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">SEX</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">BLODD GROUP</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ADDRESS</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">(P.O)</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">(P.S.)</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">BLOCK</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">DISTRICT</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Patient Contact No.
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Refer Contact No.
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">PATIENTS'NATURE</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Patient's Occupation
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">DOCTOR</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">VISIT DATE</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">VISIT TIME</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </form>
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            SAVE
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            PRINT
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
            DELETE
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Opd;
