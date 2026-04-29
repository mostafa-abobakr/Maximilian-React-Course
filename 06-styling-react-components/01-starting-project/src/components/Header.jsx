import logo from '../assets/logo.png';

// import { styled } from "styled-components";


// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 1rem;
//     width: 11rem;
//     height: 11rem;
//   }

//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }
//   @media (min-width: 768px) {
//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;


export default function Header() {
  return (
    <header className="felx felx-col items-center my-8 ">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-4 w-44 h-44 mx-auto"
      />
      <h1 className="text-2xl font-pacifico font-semibold tracking-[0.8rem] text-center uppercase m-0 text-amber-800 md:text-4xl">
        ReactArt
      </h1>
      <p className="text-center m-0 text-stone-400 ">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
