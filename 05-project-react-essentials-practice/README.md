# 05 project react essentials practice
# Practice Project - Investment Calculator

## 🎯 Project Goal
A functional investment calculator that takes user input (initial investment, annual investment, expected return, and duration) and dynamically renders a data table of yearly compounded results.

## 🧠 Key Architectural Lessons

### 1. Lifting State Up (In Practice)
* The `<UserInput />` component collects data, but the `<Results />` component needs that data to do the math. 
* **Solution:** The `useState` Hook was "lifted up" into the parent `<App />` component. The state is passed down to `UserInput` via a function prop, and the current values are passed down to `Results` via data props.

### 2. The Power of "Derived State" (Crucial Concept)
* **The Rookie Mistake:** Storing the calculated results array in its own `useState` and trying to update it using `useEffect` whenever the user input changes.
* **The React Way:** We only store the raw user input in `useState`. The calculated table data is just a standard JavaScript variable derived from that state during the component's render cycle. 
* *Rule of thumb:* If a value can be calculated from existing state/props, do not put it in a separate state!

### 3. Conditional Rendering for Error Handling
Used a simple conditional check to prevent the app from crashing if the user enters a negative duration (e.g., {inputIsValid ? <Results /> : <p>Please enter a duration greater than zero.</p>}).

### 4. Generic Change Handlers
Instead of creating four different functions to handle four different input fields, we used one generic function that takes an `identifier` and the `newValue`. 

```javascript
// Example of the generic state updater used in this project:
function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputIdentifier]: +newValue // The '+' converts the string to a number
    };
  });
}
