import React from "react";

const UserInput = ({ userInput, handleChange }) => {
  return (
    <section className="p-8 max-w-2xl mx-auto my-8 rounded-lg shadow-lg shadow-[#2b996d]/20 bg-linear-to-b from-[#307e6c] to-[#2b996d]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            className="font-condensed text-xs font-bold uppercase text-[#83e6c0]"
            htmlFor="initial-investment"
          >
            Initial Investment
          </label>
          <input
            className="w-full p-3 border border-teal-200/40 rounded-md bg-transparent text-[#c2e9e0] text-lg focus:outline-none focus:ring-2 focus:ring-[#83e6c0] focus:border-transparent transition-all"
            type="number"
            id="initial-investment" 
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-condensed text-xs font-bold uppercase text-[#83e6c0]"
            htmlFor="annual-investment"
          >
            Annual Investment
          </label>
          <input
            className="w-full p-3 border border-teal-200/40 rounded-md bg-transparent text-[#c2e9e0] text-lg focus:outline-none focus:ring-2 focus:ring-[#83e6c0] focus:border-transparent transition-all"
            type="number"
            id="annual-investment" 
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-condensed text-xs font-bold uppercase text-[#83e6c0]"
            htmlFor="expected-return"
          >
            Expected Return (%)
          </label>
          <input
            className="w-full p-3 border border-teal-200/40 rounded-md bg-transparent text-[#c2e9e0] text-lg focus:outline-none focus:ring-2 focus:ring-[#83e6c0] focus:border-transparent transition-all"
            type="number"
            id="expected-return" 
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-condensed text-xs font-bold uppercase text-[#83e6c0]"
            htmlFor="duration"
          >
            Duration (Years)
          </label>
          <input
            className="w-full p-3 border border-teal-200/40 rounded-md bg-transparent text-[#c2e9e0] text-lg focus:outline-none focus:ring-2 focus:ring-[#83e6c0] focus:border-transparent transition-all"
            type="number"
            id="duration" 
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
