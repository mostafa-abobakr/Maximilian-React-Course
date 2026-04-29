# Section 6: Styling React Components

## #106 -> #110: Vanilla CSS & Inline Styles

- Vanilla CSS styles are not scoped to the component in which you import the CSS file into, it could also affect other tags which have the same name or class name in other components.
- That is because at the end all the CSS files are injected by Vite into the head of the same HTML file, so the CSS styles are then applied globally.
- You can solve this problem by using inline styles, but keep in mind it doesn't work the same as regular HTML.
- In HTML you use inline styles by passing the styles as a string to the style property in the HTML tag.
- In JSX you can't pass the styles as a string to the style prop. Instead, you have to pass as an object with each style as a key-value pair to the style prop. `-> style={{color: 'red', margin: 'auto'}}`
- In the inline style object you can't use property names like `text-align`, instead you need to use camel case notation like `textAlign` or just wrap the property name in quotes `'text-align'`.
- The big problem with inline styles is that you will have to target each element individually.
- Another major drawback of inline styles is that you cannot use pseudo-classes (like `:hover` or `:focus`) or media queries (like `@media (max-width: 768px)`) inside that style object.

## #111 -> #113: Dynamic Styling & CSS Modules

- The big advantage with inline styles is that conditional and dynamic styles are very easy to implement.
- When adding a class name conditionally you should use a ternary expression like this: `className={condition ? 'classname' : undefined}`.
- If an element has a default class name and conditional classname then you should use template literals like this: `className={\`default classname ${condition ? 'active' : undefined}\`}`
- CSS modules enable you to scope CSS files to certain components, it's implemented by the build process by creating unique class names for every CSS module file.
- You convert your normal CSS file to a module like this `filename.module.css` then you import it like this in your component:
  `import classes from './filename.module.css'`
- To use a class name from the CSS module file you have to use the object you imported it with like this: `{classes.classname}`
- If your CSS class name has a dash in it (like `.my-button`), you cannot use dot notation. You must use bracket notation instead: `classes['my-button']`.

## #114 -> #118: Styled Components

- Styled Components is a popular third-party package (a CSS-in-JS library) that solves the scoping problem by allowing you to write standard CSS syntax directly inside your JavaScript files.
- Instead of writing a standard HTML element and giving it a `className`, you use tagged template literals to create a brand new, pre-styled React component: `const Button = styled.button\`...\``
- Behind the scenes, Styled Components automatically generates unique, randomized class names and injects them into the DOM, ensuring your styles never leak into other components.
- A big advantage of Styled Components over inline styles is that standard CSS features like `:hover`, nested selectors (using the `&` symbol), and media queries work perfectly inside the template literal.
- To apply dynamic styles, you don't use ternary operators on class names. Instead, you pass standard React props to your styled component and read them inside the CSS: `background-color: ${props => props.invalid ? 'red' : 'blue'};`.

## #119 -> #125: Tailwind CSS

- Tailwind CSS takes a completely different approach. It is a utility-first CSS framework where you don't write custom CSS rules at all.
- Instead of making up class names or creating CSS files, you style elements by adding pre-defined utility classes directly to the `className` prop (e.g., `className="flex items-center bg-blue-500 p-4"`).
- The main benefit of Tailwind is that you never have to leave your JSX file to style a component, and you don't have to worry about thinking up class names or global CSS scope conflicts.
- Dynamic styling in Tailwind relies heavily on the same standard React template literal patterns you use for normal classes: `className={\`p-4 rounded ${isValid ? 'bg-green-500' : 'bg-red-500'}\`}`.
