import React ,{useState}from 'react';

const Parent = ({id}) => {
  return (
    <div className="flex justify-center w-full ">
<div className="flex flex-col w-full p-4 border-8 border-black  items-center ">
<div className="grid grid-cols-4 gap-2 mb-4">
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">PATIENT REGISTER</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">CASH RECEIPT</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">BED SERVICE</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">MEDICINE APPLY</button>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">MEDICAL TEST</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">OPERATION DONE</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">DOCTOR VISIT(IN)</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">OTHER SERVICES</button>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        <button className="bg-blue-400 text-black font-bold py-2 px-7 py-6 rounded-lg">DOCUMENTS</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">DIALYSIS</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">MED RECEIPT</button>
        <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">MED RETURN</button>
      </div>
      
   <div>
        <div className="flex  flex-col items-center justify-center bg-blue-300 w-full  text-black font-bold rounded-lg">
          <div className="p-3">201</div>
          <div className="bg-gray-200 text-black px-9 py-5 rounded">BANDANA NASKAR</div>
          <div className="bg-gray-200 text-black px-9 w-full py-5 rounded">0888/09-23/G</div>
        </div>
        
        <div className="col-span-2 m-8"></div>
      </div>
      <div className="flex justify-end w-full">
      <div className="flex justify-between w-full ">
      <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-lg">FINAL BILLS</button>
      <button className="bg-customBlue text-black font-bold py-2 px-9 rounded-lg">CLOSE</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Parent ;