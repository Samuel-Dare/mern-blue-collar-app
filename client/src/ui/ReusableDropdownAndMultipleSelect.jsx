import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { H3 } from './Headings';

const ReusableDropdownAndMultipleSelect = ({
  label,
  options,
  selectedServices,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleOption = (option) => {
  //   onChange((prevSelectedOptions) => {
  //     if (prevSelectedOptions.includes(option)) {
  //       return prevSelectedOptions.filter((item) => item !== option);
  //     } else {
  //       if (prevSelectedOptions.length < 3) {
  //         return [...prevSelectedOptions, option];
  //       } else {
  //         toast.error('Maximum of three selections allowed');
  //         return prevSelectedOptions; // Return unchanged array if limit exceeded
  //       }
  //     }
  //   });
  // };

  const toggleOption = (option) => {
    if (selectedServices.length >= 3 && !isSelected(option)) {
      toast.error('Maximum of three selections allowed');
      return;
    }

    // Pass a callback function to handle the state update
    onChange((prevSelectedServices) => {
      if (prevSelectedServices.includes(option)) {
        return prevSelectedServices.filter((item) => item !== option);
      } else {
        return [...prevSelectedServices, option];
      }
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isSelected = (option) => {
    return selectedServices.includes(option);
  };

  const getOptionClasses = (option) => {
    return isSelected(option) ? 'bg-colorBrand4' : '';
  };

  // const handleConfirmSelection = () => {
  //   if (selectedOptions.length === 0) {
  //     toast.error('Please select at least one option');
  //   } else {
  //     onUpdateSelectedOptions(selectedOptions);
  //   }
  // };

  return (
    <div className="relative">
      <div className="relative">
        <div
          className=" my-2 flex w-full cursor-pointer items-center justify-between rounded-md border bg-colorGrey0 p-2 outline-none hover:border-colorBrand2 focus:border-colorBrand2
          "
          onClick={toggleDropdown}
        >
          {selectedServices.length === 0 ? (
            <span className="text-colorGrey500">{label}</span>
          ) : (
            <span>{selectedServices.join(', ')}</span>
          )}
          <svg
            className="h-5 w-5 text-colorGrey500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-colorGrey300 bg-colorGrey0 shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className={`flex cursor-pointer px-4 py-2 ${getOptionClasses(
                  option,
                )}`}
                onClick={() => toggleOption(option)}
              >
                <span>{option}</span>
                <span className="mt-2">
                  {isSelected(option) && (
                    <svg
                      className="ml-2 h-4 w-4 text-colorGreen700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableDropdownAndMultipleSelect;
