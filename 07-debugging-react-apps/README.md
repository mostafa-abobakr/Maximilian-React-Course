# 07 debugging react apps

## 1. Understanding Error Messages & Warnings

*   **Syntax Errors:** Code typos or missing brackets. These are caught immediately by the compiler (Vite/Webpack). The app will fail to compile, and the exact file and line number will be displayed in your terminal and browser overlay.
*   **Runtime Errors:** Errors that occur while the application is running (e.g., trying to map over an array that is currently `undefined`). This will crash the React app and throw a red error overlay in development mode.
*   **Logical Bugs:** The hardest to fix. The app runs perfectly without throwing any errors, but the UI or data flow does not behave as expected. These require stepping through the code manually.
*   **Console Warnings:** Yellow text in the browser's developer console. These do not crash the app, but they indicate potential memory leaks or bad practices (e.g., forgetting to add a unique `key` prop when rendering a list of items). You should always resolve these.

## 2. The Browser Debugger & Breakpoints

*   **Source Maps:** Modern build tools generate "source maps." This means that when you open the Chrome Developer Tools, you can view your original, readable React JSX files instead of the messy, compiled JavaScript that the browser is actually executing.
*   **The Sources Tab:** Inside Chrome/Edge DevTools, you can navigate to the `Sources` tab, find your specific component file, and click on a line number to set a **Breakpoint**.
*   **Stepping Through Code:** When the browser reaches a breakpoint, it completely pauses the application. You can then hover over variables to see their exact values at that specific millisecond, or step through your functions line-by-line to see exactly where your logic fails.

## 3. React Developer Tools (The Extension)

*   **What it is:** An essential browser extension (available for Chrome/Firefox/Edge) built specifically by Meta to debug React applications. It adds two new tabs to your browser's developer tools: `Components` and `Profiler`.
*   **The Components Tab:** Shows your exact React component tree (e.g., `<App>` -> `<Header>` -> `<Navigation>`) rather than the standard HTML DOM tree (`<div>` -> `<header>` -> `<ul>`).
*   **Inspecting State & Props:** When you click on a specific component in this tree, a side panel opens revealing the exact `props`, `hooks`, and `state` tied to that component. 
*   **Live Editing:** You can actively edit the state and props directly inside this extension panel to force the UI to update, allowing you to test edge cases without constantly rewriting your code.

## 4. Strict Mode (`<React.StrictMode>`)

*   **The Wrapper:** Usually found in your `main.jsx` or `index.js` file, wrapping your root `<App />` component.
*   **Double Rendering:** When Strict Mode is active, React will intentionally render all of your components **twice** upon their initial load. 
*   **The Purpose:** This is not a bug; it is a built-in stress test. By rendering components twice, React helps you easily spot impure functions, state-mutation bugs, or side-effect issues (like setting up an event listener in a `useEffect` but forgetting to return a cleanup function).
*   **Development Only:** This double-rendering behavior only happens on your local development server. It is completely stripped out when you build the app for production.