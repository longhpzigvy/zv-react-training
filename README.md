# Zigvy React Training Curriculums and Resources

This training is assuming that you are familar with **Javascript**, **Basic NodeJS** and **Object-Oriented Programming Concept**

## Resources
- [Fullstack React - The complete guide to ReactJS and Friends](https://drive.google.com/file/d/1eX_nMcPBYtLRSEp74ZVpUrGVltsFDBRc/view?usp=sharing)
- [Redux Official Document](https://redux.js.org/basics/basic-tutorial)
- [Redux Saga Document](https://redux-saga.js.org/)
- [You don't know JS](https://github.com/getify/You-Dont-Know-JS)

## Content
- **Training 1 - Introduction: React**
  - What is a React library?
  - Why do we use React?
  - Create a new React project using `create-react-app`
  - ES6 Systax Overview: `import`, `export`, `arrow function`, `class declaration`
  - Basic concept of React
  - Component types and when to use them
    - Component
    - PureComponent
    - Stateless Component (or Functional Component)
  - Re-using React components
  - Folder structure of a React project

- **Training 2 - Basic React: React State, Props and Ref**
  - What is a React state?
  - When to use state?
  - What is a properties (or props) in React?
  - When to use props?
  - React Ref
  - Rendering a list with React using `map`
  - Fragment in React
  - Debugging React app using React Devtools
  - Basic usage of `lodash`

- **Training 3 - Basic React: React Life Cycle**
  - Overview of React Life Cycle
  - `componentDidMount`
  - `componentWillUnmount`
  - `componentDidUpdate`
  - `shouldComponentUpdate`
  - `render`
  - `(static) getDerivedStateFromProps`

- **Training 4 - Intermediate React: Calling API with Axios, Fetch API**
  - Using `fetch` API to get data from API
  - Using state, props to transfer data from API around components
  - Using `axios` as a replacement of `fetch` API
  - Using `debounce` and `throttle` (from lodash) to improve the performance

- **Training 5 - Advanced React: Redux and React Redux**
  - Introduction to fundemental of functional programming
    - Immutable
    - What is a side effect?
    - Benefit of functional programming
    - The role of functional programming in Redux architecture
    - Using JS functional functions: `map`, `filter`, `reduce`, `some`, `every`
  - Introduction to Redux architecture
  - Understanding Redux architecture data flow (Uni-directional data flow)
    - What is a redux action?
    - What is a reducer?
    - What is a action dispatcher?
  - Why do we need to use Redux?
  - Connecting Redux with React using React Redux
  - Redux state vs React state

- **Training 6 - Advanced React: Redux Middleware**
  - Setup a middleware for Redux
  - Using Redux Saga middleware for side-effect handling, calling API, and background job*
  - Redux persist for persisting data
  - Redux devtool extension middleware for debugging redux with Redux Devtools Ext
  - Debugging Redux with Redux Devtools Ext

- **Training 7 - Final Project and Test**
  - Final test with 20-30 questions about React and Redux. In order to pass, you may need to achieve at least 80% of total score
  - Final project that tested if you are ready or not

- **Training 8 - Addional React Topics (Optional)**
  - React Router*
  - Styled components*
  - Optimizing React Application*
  - Introduction to `Babel`*
  - Config `eslint`*
  - React Hook API*
  - React Memo API
  - React Lazy
  - React Context
  - Higher Order Component (HOC)

## Guide
- Fork this repository

- Clone the forked repo

```bash
git clone https://github.com/[username]/zv-react-training
```

- Setup upstream for further resource update

```bash
git remote add upstream https://github.com/longhpzigvy/zv-react-training
```

- Read the README in training section 1, 2, 3, etc and complete the task

- To update with upstream

```bash
git pull upstream master --rebase
```

## Recommendation Readings / Videos
- [Redux Training on EggHead](https://egghead.io/courses/getting-started-with-redux)
- [Unidirectional user interface architectures](https://staltz.com/unidirectional-user-interface-architectures.html)