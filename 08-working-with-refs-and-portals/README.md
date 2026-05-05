# 08 working with refs and portals

## The useRef Hook Basics

- A ref in React is a value that is managed by React in a special way.
- You use a ref in React by importing the `useRef` hook from React: `import { useRef } from 'react';`
- Initialization: `const refValue = useRef();`
- One thing that you will mostly do with refs is to connect them to JSX elements using the special `ref={}` prop, which is supported by every JSX element out of the box.
- The ref prop takes the ref variable as an input like this: `<input ref={refValue} />`
- After connecting a ref value to a JSX element, you can use this ref to access the connected element.
- To access the connected element, you have to use the `current` property, which is the only property that the ref object has: `refValue.current`
- The `current` property is where the connected element is stored.

## Working with Refs

- Once connected, you can access all the native methods and properties of that HTML element (e.g., `<input ref={playerName} />` allows you to read `playerName.current.value` on a button click).
- **Logical Operators Shortcut:** A ternary expression like `{playerName ? playerName : "default text"}` can be shortened.
  - Use the Logical OR operator `||` to catch any falsy value (including empty strings `""`): `{playerName || "default text"}`
  - Use the Nullish Coalescing operator `??` if you _only_ want to catch `null` or `undefined`: `{playerName ?? "default text"}`
- **Refs vs. State (Re-renders):** Unlike state, when a ref changes, the component function does _not_ re-execute. Setting the value of a ref does not cause a re-render.
- **Refs vs. Regular Variables:** You can use refs to manage any type of value. Unlike regular variables, refs don't get reset or cleared when the component re-executes. Just like state, React stores its value behind the scenes to ensure it doesn't get lost.
- **Mutating Refs:** Because refs don't trigger re-renders, you don't need a "setter" function. You can mutate them directly: `refValue.current = 5`.
- **When to use Refs for Data:** If you have a value that you want to manage behind the scenes, but it doesn't impact the UI directly, you should use a ref instead of state.
- **The Golden Rule of DOM Refs:** Refs enable direct DOM element access, but you should **never** use them to destructively manipulate the DOM (like removing an element or adding new children). React's Virtual DOM controls the UI structure; only use DOM refs for non-destructive actions like focusing an input or reading a value.
- **React 19 Update (Forwarding Refs):** In older versions of React, passing a ref to a custom component required wrapping it in a clunky `forwardRef()` function. In React 19 and newer, `forwardRef` is dead. You can now pass a `ref` directly into your custom components and access it via standard props (`props.ref`).

## React Portals

- You use portals if you have a JSX element that semantically shouldn't be rendered in the place where you are using it in your component tree, but you want to render it somewhere else physically in your HTML document.
- **The Main Use Case:** Portals are the absolute standard for building global overlay UI components like Modals, Tooltips, and Dropdown menus. They allow you to write the modal logically inside a nested component, but render it physically at the very root of the `<body>`, avoiding `z-index` and `overflow: hidden` CSS bugs caused by parent containers.
- To use portals: `import { createPortal } from 'react-dom';`
- You wrap the JSX element that you want to move inside the `createPortal` function.
- The `createPortal` function takes two arguments:
  1. The first argument is the JSX code or element that you want to move.
  2. The second argument is the place in the actual DOM where you want it to be injected. You can specify it using standard browser APIs like `document.getElementById('modal-root')`.
