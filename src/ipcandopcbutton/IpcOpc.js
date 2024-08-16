import React,{useState} from 'react';
import Mainscreen from '../mainpages/Mainpage';
import Opd from '../opdsection/Opd';

const IpcOpc = () => {
    const [selectedOption, setSelectedOption] = useState('IPD');  // Default to 'IPD'
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
        <div className=" flex items-center space-x-4 justify-center">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="ipc-opc"
              value="IPD"
              checked={selectedOption === 'IPD'}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700 text-3xl">IPD</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="ipc-opc"
              value="OPD"
              checked={selectedOption === 'OPD'}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700 text-3xl">OPD</span>
          </label>
        </div>
  
        <div className="mt-8">
          {selectedOption === 'IPD' && <Mainscreen />}
          {selectedOption === 'OPD' && <Opd />}
        </div>
      </div>
    );
  };
  
  export default IpcOpc;
