import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      <InputComponent
        required
        placeholder={placeholder}
        {...(isTextArea ? { rows: 10 } : {type: inputType, step: '0.1'})}
        value={value}
        onChange={handleChange}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent transition hover:scale-105 shadow-lg shadow-indigo-500/50 font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
      />
    </label>
  );
};

export default FormField