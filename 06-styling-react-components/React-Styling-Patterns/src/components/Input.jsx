import React from 'react'
// import { styled } from 'styled-components'

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${(props) => (props.$invalid ? "#ff1616" : "#6b7280")};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${(props) => (props.$invalid ? "#ff9e9e" : "#d1d5db")};
//   color: ${(props) => (props.$invalid ? "#ff1616" : "#374151")};
//   border: 1px solid ${(props) => (props.$invalid ? "#ff1616" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow:
//     0 1px 3px 0 rgba(0, 0, 0, 0.1),
//     0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

const InputGroup = ({ title, invalid, ...props }) => {
  
  let labelClasses = "block mb-2 text-xs font-semibold tracking-widest uppercase";
  if (invalid) labelClasses += " text-red-500";
  else labelClasses += " text-gray-500"; 


  let inputClasses = "w-full py-3 px-4 leading-6 rounded-sm shadow border";
  if (invalid) inputClasses += " bg-red-300 text-red-500 border-red-500"; 
  else inputClasses += " bg-gray-300 text-gray-700 border-transparent";

  
  return (
    <div>
      <label className={labelClasses} >{title}</label>
      <input $invalid={invalid} {...props} className={inputClasses} />
    </div>
  );
}

export default InputGroup