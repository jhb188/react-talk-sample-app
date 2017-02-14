# Writing a react app

## Before Redux
- Local state in each component
- Communication between components done through refs
- All state and props were plain JS objects

- Problems:
  - Hard to track where bugs occurred
  - Lots of cognitive overhead tracking in which component state is contained
  - Slow render times for components with large javascript objects

## Following the Redux Architecture
- Components render based on props and do not contain local state
- Single application state (does not have to be managed by Redux)

  - Container and Presentational Components
    - The majority of components are pure functions
    - A few components are intermediary components that "connect" to the applicaction state
    - Avoid class components with state stored in the class
  
    - Benefits:
      - Greatly improved performance due to React lifecycle methods being managed by Redux
      - Even better performance when coupled with Immutable
      - More control over what is rendered (no uncontrolled inputs)
      - Easier to reason about
        - State is contained within the application rather than in individual components
        - Data flows one direction throughout your application
        - Debugging is much easier
    
