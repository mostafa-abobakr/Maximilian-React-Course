# Section 03: React Essentials - Components, JSX, Props, & State

## 1. Project Setup (Modern Approach)

- To create a new React application we use **Vite**. The command is: `npm create vite@latest {name-of-app} -- --template react`

## 2. How React Injects the UI

- The `index.html` file in a React app contains a simple `<div id="root"></div>`.
- The root component, usually `<App />`, gets injected directly into this `div`. This is handled by the `createRoot().render()` method in your main entry file (e.g., `index.jsx` or `main.jsx`).

## 3. Component Fundamentals

Components are the reusable building blocks of a React application. Component functions **MUST** follow specific rules:

- **Capitalization:** The function name **must** start with an uppercase letter. If the name consists of multiple words, PascalCase must be used (e.g., `MyComponent`).
- **Return a Renderable Value:** The component must return a value that React can render. Valid renderable values include JSX, strings, numbers, booleans, `null` (to render nothing), or an array of these types.
- **Single Cohesive Element:** A component must return a _single cohesive element_. If you return multiple adjacent elements directly, React doesn't know how to group them in the DOM.
- **React Fragments:** To return multiple adjacent elements without adding an unnecessary wrapper `<div>` to your final HTML, you can wrap them in a React Fragment using empty tags: `<> ... </>`.
- **Exporting Components:** The `export` keyword is used to publicly share a component so it can be imported elsewhere.
  - **Default Export:** `export default ComponentName;` (Imported without curly braces).
  - **Named Export:** `export const ComponentName = ...` (Imported with curly braces like `{ ComponentName }`).

## 4. JSX and Dynamic Values

- **Under the Hood:** JSX is a JavaScript syntax extension that allows you to create elements in a declarative way. **JSX does not transpile into HTML.** It transpiles into standard **JavaScript** function calls (like `React.createElement()`), which React then uses to update the browser's DOM.
- **Curly Braces `{}`** are used in JSX to output dynamic values.
- Inside these braces, you can only write **expressions** (code that resolves to a single value, like `2 + 2` or `user.name`).
- You **cannot** use statements inside curly braces (no `if` statements, no `for` loops, and no function definitions). However, you _can_ use ternary operators for conditional rendering.

## 5. React's Core Philosophy

- **Declarative vs. Imperative:** In standard Vanilla JS, we write imperative code (giving step-by-step instructions to manipulate the DOM). In React, we write **declarative** code. You define the target HTML structure based on the current state, and you don't dictate the exact steps to get there. React handles the actual DOM updates behind the scenes using a "Virtual DOM."

## 6. Props (Properties)

Props are how you pass data from a parent component down to a child component.

- **Reusable & Dynamic:** They prevent components from being hardcoded.
- **Read-Only:** A child component should never modify its own props.
- **One-Way Data Flow:** Data only flows downward (Parent ➝ Child).
- **`props.children`:** This is a special, automatically passed prop representing the content placed between a component's opening and closing tags (e.g., `<Card> This text is the children </Card>`).

## 7. Working with Functions & Events

- **Where to define them:**
  - If a function needs access to the component's `state` or `props`, define it _inside_ the component (before the `return` statement).
  - If it _does not_ need state/props, define it _outside_ the component to prevent it from being recreated on every render.
- **Passing functions as values:** When passing a function to an event listener (like `onClick`), do **not** add parentheses (e.g., `onClick={handleClick}`). Adding `()` executes the function immediately when the page loads. You just want to pass the function _reference_ so React can call it later.
- **Naming Conventions:** Props that expect to receive a function should be named starting with "on" (e.g., `onSelect`, `onClick`, `onSubmit`).
- **Passing Arguments:** If you need to pass specific arguments to an event handler, wrap it in an inline arrow function: `onClick={() => handleClick(id)}`.

## 8. State and React Hooks

- **Component Execution:** By default, React only executes a component's function _once_ when it is first rendered. Changing a regular standard variable will **not** trigger the UI to update. To trigger a re-render, you must use State.
- **Rules of Hooks:**
  1. All functions starting with `use` (like `useState`) are React Hooks.
  2. Hooks can only be called inside React component functions (or custom hooks).
  3. Hooks must be called at the **top level** of the component. They cannot be placed inside `if` statements, loops, or nested functions.
- **`useState`:** This hook always returns an array with exactly two elements: `[currentValue, updaterFunction]`. We use array destructuring to assign these to variables.

## 9. Conditional Rendering Tricks

Instead of using a ternary operator returning null (`{ condition ? <MyComponent /> : null }`), you can use the logical AND operator `&&`.

- **Syntax:** `{ condition && <MyComponent /> }`
- **How it works:** If the condition before the `&&` is true, React outputs whatever comes immediately after it.

## Quick JavaScript Glossary

- **Expression:** A piece of code that produces a value (e.g., `5 + 5`, `true ? 'yes' : 'no'`).
- **Statement:** An instruction that performs an action but doesn't resolve to a single value (e.g., `if (x > 5) { ... }`).
- **Declaration:** Creating something (like a variable or function) in memory (e.g., `const age = 22;`).
