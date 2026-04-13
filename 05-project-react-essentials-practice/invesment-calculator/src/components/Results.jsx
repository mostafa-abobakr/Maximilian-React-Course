import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (

      <table className="w-4xl mx-auto border-collapse text-sm sm:text-base text-center">
        <thead className="text-[#83e6c0] border-b-2 border-[#307e6c]">
          <tr>
            <th className="py-4 px-4">Year</th>
            <th className="py-4 px-4">Investment Value</th>
            <th className="py-4 px-4">Interest (Year)</th>
            <th className="py-4 px-4">Total Interest</th>
            <th className="py-4 px-4">Invested Capital</th>
          </tr>
        </thead>
        <tbody className="font-condensed text-[#c2e9e0]">
          {resultData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const investedCapital = yearData.valueEndOfYear - totalInterest;

            return (
              <tr
                key={yearData.year}
                className="border-b border-[#2b996d]/20 even:bg-[#2b996d]/5 hover:bg-[#2b996d]/10 transition-colors duration-200"
              >
                <td className="py-3 px-4 text-center">{yearData.year}</td>
                <td className="py-3 px-4">
                  {formatter.format(yearData.valueEndOfYear)}
                </td>
                <td className="py-3 px-4">
                  {formatter.format(yearData.interest)}
                </td>
                <td className="py-3 px-4">{formatter.format(totalInterest)}</td>
                <td className="py-3 px-4">
                  {formatter.format(investedCapital)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

export default Results;
