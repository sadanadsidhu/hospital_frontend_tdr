import React, { useState } from 'react';
import tdr_log from "../assests/tdr_log.jpg"

const Header = () => {
  // Define main menu items and their corresponding submenus
  const menuItems = [
    { name: 'FILE MASTER', submenu: ['SERVICE ITEMS', 'MEDICINE ITEMS','MEDICAL TEST NAME','PATIENTS REGISTER','DOCTOR DETAILS',
        'SISTER DETAILS','STAFF INFO','BED INFO','PACKAGE INFO','SUPPLIERS INFORMATION','LEDGER CREATION','HOSPITAL INFO.',] },
    { name: 'DATA ENTRY', submenu: ['MEDICINE APPLY', 'OPERATION (O.T) ENTRY','OTHER CHARGES','BIRTH/DELIVERY CASE','DEATH CASE','PATIENT DISCHARGE','REFERRAL ENTRY','PURACHASE BILL(MEDICINE)','MEDICINE STOCK ENTRY','DAILY USES ENTRY','DR. VISIT (INDOOR)','DR. VISIT (OUTDOOR)','GENERAL PAYEMENT','PATIENT PAYMENT','GENERAL RECIEPT','CASH DEPOSIT','CASH'] },
    { name: 'REPORT', submenu: ['', ''] },
    { name: 'AUDIT & ACCOUNTS', submenu: ['Subitem 1', 'Subitem 2'] },
    { name: 'UTILITY', submenu: ['Subitem 1', 'Subitem 2'] },
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="bg-customBlue p-2 shadow border-2 border-white ">
      <nav className="flex flex-row space-x-20  justify-center p-4 ">
      <img src={tdr_log} className="w-14 rounded-full" alt="TDR Logo" />
      {menuItems.map((item, index) => (
          <div key={index} className="relative mt-4 gap-2">
            <div
              className="bg-teal-900 text-white py-1 px-4 mb-2 text-center rounded cursor-pointer hover:bg-blue-700"
              onClick={() => setActiveMenu(index === activeMenu ? null : index)}
            >
              {item.name}
            </div>
            {/* Conditionally render the submenu if the menu item is active */}
            {activeMenu === index && (
              <div className="absolute bg-white text-black py-2 px-0 rounded mt-1 shadow-lg text-sm w-52 justify-center">
                {item.submenu.map((subitem, subIndex) => (
                  <div key={subIndex} className="py-3 px-2 hover:bg-gray-400 cursor-pointer w-52 h-8 justify-center">
                    {subitem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
