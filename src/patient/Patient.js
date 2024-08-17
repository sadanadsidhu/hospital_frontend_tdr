import React from 'react';

const Patient = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-teal-500 text-white p-4 mb-4 text-center text-xl font-bold">
        DR.KANDARY'S NURSING HOME MATERNITY HOME - IPD PATIENT INFORMATION
      </div>

      <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded shadow">
        {/* Left Column */}
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-gray-700">PATIENT TYPE</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">PATIENT NAME</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">Fathers/Husband Name</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">RELATION</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">SEX</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          {/* Add more fields similarly */}
        </div>

        {/* Center Left Column */}
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-gray-700">PATIENT REG. NO.</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">URN NO</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">GUARDIANS' NAME</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">PATIENTS' AGE</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">BLOOD GROUP</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>A+</option>
              <option>B+</option>
              <option>AB+</option>
              <option>O+</option>
              <option>A-</option>
              <option>B-</option>
              <option>AB-</option>
              <option>O-</option>
            </select>
          </div>
          {/* Add more fields similarly */}
        </div>

        {/* Center Right Column */}
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-gray-700">POLICE CASE</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Package Code</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">Package Name</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">Amount</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          {/* Add more fields similarly */}
        </div>

        {/* Right Column */}
        <div className="col-span-1 space-y-4">
          <div>
            <label className="block text-gray-700">Family Phone No</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">Permanent Address</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Remarks</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Weight in KG</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
          <div>
            <label className="block text-gray-700">Height in Inch</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;