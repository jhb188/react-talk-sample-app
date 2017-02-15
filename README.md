# Writing a react app the "right way"

## Bootstrapping with [create-react-app](https://github.com/facebookincubator/create-react-app)
- Created by Facebook
- Slogan "Create React apps with no build configuration."
- Saves the hassle of bootstrapping
  - Build scripts
    - Create development and production builds
    - Creates environment variables
  - Webpack
    - Combines minified css, minified js, and all other assets into one bundle
    - ES2016+ transpiling
  - Dev server
    - Run `npm start` to spin a development server
    - Includes hot reloading out of the box (no refresh needed)
  - Jest
    - Test framework
    - Includes `expect` assertions
  

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
- The majority of components are pure functions
- Single application state (does not have to be managed by Redux)
- Avoid class components with state stored in the class
  - Although technically not using `this.state` setting properties on your class instance is stateful.

  - Container Component, Presentational Components, and Connected Components
    - Presentation components
      - Responsible for how your app looks (rendering html)
      - Always pure functions
      
    - Container components
      - Render presentation components
      - Utilize React lifecyle methods
      
    - Connected components
      - Can wrap either container components or presentation components
      - "connect" to the application state
      - Should be thought of as separate components from the container or presentation components they wrap
        - Should be tested differently (and separately) from the components they wrap
        - Started putting them in separate files

  - Benefits:
    - Greatly improved performance due to React lifecycle methods being managed by Redux
    - Even better performance when coupled with Immutable
    - More control over what is rendered (no uncontrolled inputs)
    - Easier to reason about
      - State is contained within the application rather than in individual components
      - Data flows one direction throughout your application
      - Debugging is much easier

## Testing
- Each component has its own test
- Since components are pure testing is simplified
- Use the Jest test runner
  - Node based
  - Allows mocking functions
  - Has `expect` assertion functions built in
  - Unit testing (not end to end)
- Very [basic tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components) are easy to implement and can provide some safety with very little effort.

## Deployment
- Use S3 as your webserver
  - Handles versioning and scaling
  - Brians can provide more detail later or maybe give a separate talk
