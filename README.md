# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### ✅ Question Answers:

- What is JSX, and why is it used?
- Answer: JSX stands for JavaScript XML, it is used in React to write HTML like code inside JavaScript.

- What is the difference between State and Props?
- Answer: Props the way to send data from parent element to child element.State is the condition of data in a component,

- What is the useState hook, and how does it work?
- Answer: useState is a React Hook used to add state (dynamic data) to functional components.
  1. useState(0) sets the initial value.
  2. count stores the current state.
  3. setCount() updates the state.
  4. When state changes, React re-renders the component.

- How can you share state between components in React?
- Answer: State is usually shared by lifting the state up to the nearest common parent component.

- How is event handling done in React?
- Answer: Event handling in React is similar to HTML but uses camelCase syntax and passes a function.
