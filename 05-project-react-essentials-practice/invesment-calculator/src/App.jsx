import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // The '+' converts the string value to a number
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />

      {!inputIsValid && (
        <p className="text-center text-red-400 bg-red-400/10 py-3 px-6 rounded-md max-w-md mx-auto border border-red-400/20 font-bold tracking-wide">
          Please enter a duration greater than zero.
        </p>
      )}

      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
