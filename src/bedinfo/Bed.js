import React, { useState } from 'react';
import { toast } from "react-toastify";

const Bed = () => {
  const [formData, setFormData] = useState({
    bedNo: '',
    bedType: '',
    wardNo: '',
    bedDescription: '',
    bedRate: '',
    adminId:123
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:2021/add/bed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Bed information saved successfully!');
        // Optionally reset form data
        setFormData({
          bedNo: '',
          bedType: '',
          wardNo: '',
          bedDescription: '',
          bedRate: ''
        });
      } else {
       toast.error ('Failed to save bed information.');
      }
    } catch (error) {
      console.error('Error saving bed information:', error);
      toast.error('Error occurred while saving bed information.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-blue-100  h-full w-full shadow-md overflow-y-scroll">
      <h1 className="text-center text-xl font-bold mb-4">DR.KANDARY'S NURSING HOME MATERNITY HOME</h1>
      <h2 className="text-center text-lg font-semibold mb-4">BED INFORMATION</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-sm font-semibold mb-2">BED DETAILS</h3>
        
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">BED NO.</label>
          <input
            type="text"
            name="bedNo"
            className="w-full p-2 border rounded"
            value={formData.bedNo}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">Bed Type</label>
          <input
            type="text"
            name="bedType"
            className="w-full p-2 border rounded"
            value={formData.bedType}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">WARD NO.</label>
          <input
            type="text"
            name="wardNo"
            className="w-full p-2 border rounded"
            value={formData.wardNo}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">BED RATE / DAY</label>
          <input
            type="text"
            name="bedRate"
            className="w-full p-2 border rounded"
            value={formData.bedRate}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm font-bold mb-1">BED Description</label>
          <textarea
            name="bedDescription"
            className="w-full p-2 border rounded"
            rows="3"
            value={formData.bedDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bed;
