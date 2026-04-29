import React from 'react'
// import {styled} from 'styled-components'
// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;
//   transition: all 0.3s;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

export default function Button({ children,...props }) {
  return (
    <button
      className="py-4 px-8 cursor-pointer font-semibold uppercase rounded-sm text-gray-800 bg-amber-400 transition hover:bg-amber-500 "
      {...props}
    >
      {children}
    </button>
  );
}