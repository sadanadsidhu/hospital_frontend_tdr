import React,{useState} from "react";
import Parent from "../parentfolder/Parent";
import Modal from "../Modal";
const Mainscreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBed, setSelectedBed] = useState(null);
  const bedDetails = [
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
 
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: 201, name: "BANDANA NASKAR" },
    { id: 202, name: "" },
    { id: 203, name: "SAYANTIKA MONDAL" },
    { id: 204, name: "TANUSHREE MANNA" },
    { id: 205, name: "" },
    { id: 206, name: "" },
    { id: 207, name: "" },
    { id: 208, name: "" },
    { id: 209, name: "" },
    { id: 210, name: "" },
    { id: 211, name: "" },
    { id: 212, name: "" },
    { id: 213, name: "" },
    { id: 215, name: "" },
    { id: 216, name: "" },
    { id: 217, name: "" },
    { id: 218, name: "" },
    { id: 219, name: "" },
    { id: 220, name: "" },
    { id: 301, name: "" },
    { id: 302, name: "" },
    { id: 303, name: "" },
    { id: 304, name: "PRIYA DAS" },
    { id: 305, name: "" },
    { id: "CABIN-1", name: "SABNUR KHATUN" },
    { id: "CABIN-2", name: "" },
    { id: "CABIN-3", name: "" },
    { id: "CABIN-4", name: "" },
    { id: "CABIN-5", name: "" },
    { id: "ICU", name: "" },
    { id: "DEBABRATA CHATTERJEE", name: "" },
    { id: "AJIT HALDER", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
    { id: "KISHOR", name: "" },
 
  ];
  const openModal = (bed) => {
    setSelectedBed(bed);
    setIsModalOpen(true);
  };

  const closeModal = (id) => {
    setIsModalOpen(false);
    setSelectedBed(id);
  };
  const handleClick =(id)=>{
    console.log("idddd",id)
    openModal(id)
  }
  return (
    <>
    <div className="flex flex-col items-center bg-customBlue w-full h-screen py-8  ">
      <div className="flex justify-between w-full bg-customBlue ">
      <h1 className="text-xl font-bold mx-10  font-serif">BED DETAILS</h1>
      </div>
      <div className="grid grid-cols-5 gap-4 w-full w-full mx-4 shadow border-8 border-white  h-FULL overflow-y-scroll px-4   ">
        {bedDetails.map((bed) => (
          <div
            key={bed.id}
            onClick={()=>handleClick(bed.id)}
            className={`p-5 border rounded cursor-pointer ${bed.name ? "bg-orange-500" : "bg-red-500"}`}
          >
            <p className="text-center font-semibold">{bed.id}</p>
            <p className="text-center">{bed.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Parent bed={selectedBed} />
      </Modal>
      </div>
    </div>
    </>
  );
};

export default Mainscreen;
