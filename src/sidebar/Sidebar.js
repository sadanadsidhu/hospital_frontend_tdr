import React from 'react';

const Sidebar = () => {
  const menuItems = [
    'PATIENT REGISTER',
    'CASH RECEIPT',
    'BED SERVICE',
    'MEDICINE APPLY',
    'MEDICAL TEST',
    'OPERATION DONE',
    'DOCTOR VISIT(IN)',
    'OTHER SERVICES',
    'OPD SECTION',
    'DOCUMENTS',
    'BED RENT UPDATE',
    'MED RECEIPT',
    'MED RETURN',
    'DIALYSIS',
    'FINAL BILLS',
  ];

  return (
    <div className="w-48 bg-blue-400 p-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="bg-blue-600 text-white py-1 px-1 mb-2 text-center rounded cursor-pointer hover:bg-blue-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
