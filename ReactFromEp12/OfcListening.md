# EP8

## class life cycle

- we can create variable in class like this.name = ''

<hr style="height:1px; background-color:#ccc; border:none;" />

# EP9 - optimizing application

- single principle method:-
- every component should be responsible for single principle
- if components are smaller and cleaner when we write test cases we can easily find out the bugs in out code

## custom hooks

- hooks are nothing but a functions (utility functions some are offered by react)
- we create custom hooks for - code reusability, cleaner components (separate UI and separate functionality), separation of concerns(each hook has different responsibility), easy to test, composition(using other hooks in custom hook for complex functionality)
- to create hook start with "use" so that react understands it is hook, it is not mandatory
- ex: useOnlineStatus we can get it from window and addEventListener
- we can pass online and offline arguments to addEventListener functions
- to test it we can use network offline in browser

## app checking || code splitting || lazy loading || dynamic bundling

- breaking down app into smaller bundlers, for large scale applications
- for example we have food and grocery in our app, food is the big module and grocery is also big module,
  so we don't need to bundle two at a time it should be based on customer choice
- whenever we click on that path then we will bundle that app separately
- for that we use lazy from react, we need to pass import('path') to it , this will return component
- we have to wrap that component in Suspense from react to catch the bundling time
- ex:- when we click on grocery then only we bundle it
- ex:- const Grocery = lazy(() => import("./src/Components/Grocery"));
{
path: "/grocery",
element: (
<Suspense fallback={<h1>Loading....!</h1>}>
<Grocery />
</Suspense>
),
},
<hr style="height:1px; background-color:#ccc; border:none;" />

# EP 10

- app styling
- companies use material ui, styled components, ant design and different css libraries
- tailwind installation and applying like bootstrap

<hr style="height:1px; background-color:#ccc; border:none;" />

# EP 11

## higher order component

- a function takes a component and return a component
- it enhances or adds some extra layer to the component

## lifting state up

- ex: you have a child component that has accordion so we may write open/close state in child but that's not good way
- never write functionality in children components or say never give control to child components

## data handling - prop drilling

- we have many nested components so we need to pass data from parent to child-to-child
- never pass props 10 or 15 level child components
- use react context to avoid passing
- just createContext and export it and then import it and data = useContext(createdContext) you will get data
- in functional we have useContext hook to access but in class component we don't have hooks
- so we need to use like <CreatedContext.Consumer> {(data)=><h1>{data}</h1>} </CreatedContext.Consumer> like this
- to update we wrap <CreatedContext.Provider value={}>{children app}/</CreatedContext.Provider> we pass values to update data in context
- context comes with react we can use it with small and mid level applications
- redux is third party application we use it in large scale application also it provides middleware features like thunk and stores
- both can be fine

<hr style="height:1px; background-color:#ccc; border:none;" />

# EP 12

## redux

- if we want any data to be available at the app level or the specific module level we will use redux
- we use react-redux and toolkit
- it is like a big state that will be available across the module or app
- create store(configureStore) --> provider store to app/module --> create slice(export slice, reducer actions) --> import actions and state to use and modify
- in redux we don't directly mutate state in reducer action, we update and return the state
- in redux tool kit we mutate state directly
- createAsyncThunk we use it for async operations like api calls if we want something to be in global level can be used in multiple places so we write it in reducer

# EP 13

## testing

- there are three to four types of testing developers do
- Manual Testing: testing manually a feature
- Unit Testing: testing a small units of code or a component
- Integration Testing: testing combined features or components nothing but a flow
- End to End testing e2e: testing from landing to login to logout including all feature flows

## testing library

### test config

- react testing library built on top of DOM testing library
- we use react testing library
- --> install react testing library --> install jest --> dependency babel --> install babel deps --> config babel
  ---> we have two babel configs inside parcel so --> we need to have parcelrc file --> get it from parcel docs-js-babel
  --> so the parcel compilation will be stopped now no conflict will happen
- then config the jest run "npx create-jest" this will initialize and creates jest configuration
- select TS/JS - select node/jsdom - select test coverage - select automatic
- jsdom is a testing run time environment its like browser, normal browsers does not run test cases
- and install jsdom separately check in react testing library - setup - jest 28
- install @babel/preset-react it will parse jsx elements to normal html elements so that JEST will test, add in bebel config file
- install @testing-library/jest-dom joint library to add custom matchers to Jest, making it easier to write readable and expressive tests when testing the DOM (typically in React apps).

### testing

- to run testing "npm run test" is the command so that it will read and run all the test files
- we write test cases under the "**tests**" folder(\_\_ is the dunder method), under this we can write .js files also considered to be test files
- or some uses fileName.test.js/ts

### writing unit test cases

- find component--> query it-->assert it
- we can create a test case using test('test description', ()=>{}) it accepts test name and call back function
- we can test functional component and rect ui component in this
- we write ex "expect(sum(1, 2)).toBe(3)" import sum function and the result to be checks the result from the function
- and for ui component ex: render(<Component/>) method from testing library gets access for a component, we can import and pass the component
- from the component we can access "const heading = screen.getByRole('heading')" screen comes from testing library it has methods
- so we can test by it methods and ex "expect(heading).toBeInTheDocument();" like if the element rendered or not like this, toBeInTheDocument comes from @testing-library/jest-dom,
- we have many screen methods like byAll, byText like this
- we can write n number of test cases in one test file

### group test cases

- we can group test cases for better readability and maintainability
- using describe('contact test cases',()=>{we can write test cases here})
- we can group inside one group nesting, nothing happens
- we can use "it" instead "test" both works fine it is just alias names, some people call like "it should" so people write like this

### test cases for a component with redux and routing

- when we render a component that has used redux when we run redux throws error, we need to wrap that component with provider
- when we wrap and give access to it can assess the context
- then we need to wrap in BrowserRouter if we use any navigation features like Link, useParams, useNavigation
- then it can find and assess the situation
- we can pass other props also to query ex: screen.getByRole('button', {name:'Login'})

### click event capture

- we use fireEvent to capture events like fireEvent.click(element) then get the element and test the expected change like login logout button

### mock data - reusable card testing

- we pass exact mock data and test the text is present or not so that we confirm the component is rendered

# Integration testing

- as usual render the component wrap it with provider is used redux, wrap with browser router if used link kind navigation
- and if it has fetch operation as fetch comes from browser but testing does not have exact browser, it has kind of env to test
- we need to add fetch to global object in testing env
- and we need to write exact fetch behavior and return mock data
- fetch returns promise and that returns json and both comes with resolves state
- global.fetch = jest.fn(()=>{
  return Promise.resolve({
  json: ()=>{
  return Promise.resolve(mockData)
  }
  })
  })
- and then if we are updating any states in the component we need to render component inside act function, that is async operation
- await act(async ()=>{ render(<Component/>)})
- for example we are testing search so we need to get the search input and button
- then fire the event first search event fireEvent(searchInput,{target:{value:'example text'}}), we need to fake the e.target.value object
- the second object represents e object
- then fire the button click event
- fireEvent.click(button)
- then will have searched cards we can get the search cards on the screen by getAllByTestId() so this will return available cards
- we can expect to be (length)
- we can test search cards length before search also
- replicate the screen when we go there to complete actions
- beforeEach, beforeAll, afterEach, afterAll functions to see logs, testing
- example is body component search test
