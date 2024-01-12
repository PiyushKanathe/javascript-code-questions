// var mainD = document.getElementById("main");
// mainD.innerHTML = `<h1>Hello</h1>`;

// HTML
// 1. Explain about HTML5 new layout elements introduced - Header, nav, section, article, aside, footer.
// 2. Main reasons for Header, footer, nav introduced in HTML5.
// 3. Use of embed tags
   // •	Iframe - The <iframe> creates an inline frame, which embeds an independent HTML document into the current document. Displayed as inline
   // •	Embed - The <embed> element creates an embedded panel in which a third-party application can run. Displayed as block
// 4. what is web accessibility in HTML – developing and designing websites/technologies so that the people with disability can use them
// 5. HTML 5 features like storage - localStorage - stores data with no expiration date. window. sessionStorage - stores data for one session (data is lost when the browser tab is closed)
// 6. Difference between local and session storage in JavaScript.
// 7. What is doctype in html5 – it’s a very first line in html document. It tells the browser what to expect, what version of HTML the document is written on.
// 8. How we make web site responsive without using CSS framework
//        I) Viewport meta tag: add it inside <head>
//              <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        II) Flexible layouts, ex: max-width: 100%
//       III) Media Queries: @media (max-width: 768px)
//        IV) Flexible Grid System. .container{ display: flex; flex-wrap: wrap}
//         V) Fluid Typography: use relative units like em and rem 
// 9. html 5 api - canvas api, geolocation api, web storage api (session storage and local storage), Audio & Video, drag and drop, notification api, web sockets. 


// CSS
// 0. box model – CSS box model is a box that wraps around every html element (content, padding, border, margin)
// 1. Difference between visibility: hidden & display: none
//        display:none means that the tag will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags. visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn't seen on the page
// 2. Explain precedence rule. depends on specificity !important, inline, id, classes, elements
// 3. Inline styles, id, class – which property/rule will be added first.
// 4. If can’t edit id still want to use class then how can we do. (Without changing any code)
// 5. Place section/div into the center of the div. show using plain CSS. 1) draw div with 100px of width and height and assign it to center. 2) now draw one more div inside with 20px of height and width position it to top right corner. 3) Different ways to implement above.
// 6. what is flex box? – it helps with making flexible responsive layout without using float or positioning
          // Display: flex
          // Flex-direction: row | row-reverse | column | column-reverse
          // align-items: flex-start | flex-end | center | baseline | stretch
          // justify-content: start |  center | space-between | space-around | space-evenly
          // aline-content: center | Flex-start | Flex-end | space-around | space-between
// 7. difference between display inline, inline-block and block
// Use inline for elements that should appear on the same line and only take as much width as necessary.
// Use inline-block for elements that should behave like inline elements but allow setting height and width.
// Use block for elements that should start on a new line and take up the full width of their container.
// 8. We have a heading element with text welcome how to focus on that element
          // We cannot focus an element with CSS alone. We need javascript for that. If we want to add a CSS to an element when its focused we can use :focus pseudo class.
          // A pseudo-class is a keyword added to a CSS selector. The pseudo-class specifies the state in which an element should appear in order for a style to apply. Pseudo-classes are added after a selector.
          // :link, :visited, :hover, :active
// 9.   CSS Semantics


// jQuery
// 1.       Difference between load and ready function.

// JavaScript
// 1. datatypes in JavaScript - number, bigInt, string, Boolean, null, undefined, object, symbol
// 2. string - immutable, object and arrays – mutable
// 3. difference between null and undefined
// 4. Type of null
// 5. Explain Es6 features. - Arrow, classes, enhanced object litrals, optional chaining
        // templet strings – HTML template, expression substitution, variable substitution, multiline strings
        // destructuring, default, rest, spread, let, const, iterators + for-of, generators, promises.
// 6. difference between var, let and const.
// 7. hoisting - moving all declarations to the top of the current scope
// 8. Change let to var then what will be the output.
// 9. How to use generator functions and where to use.
// 10. What are closures.
// 11. JavaScript declaration and expression  difference
// declaration => function food(){return 'Food'} , Expression => const food = function(){return 'food'}
// 12. What is a callback function
// 13. create a custom promise
// 14. bind, call and apply
// 15. write the code of polyfill for JavaScript bind method.
// 16. how many ways we can create object
//      I) object litral (normal object creation), II)Object constructor (new Object), III) Constructor function IV)Object.create(), V) Class 
// 17. features of this keyword - Answer in indexTwo File
// 18. for object let obj= {id:1, name: "ABC"} allow user only to change name react
// 19. object.freeze -  Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties
// 10. what is prototypical inheritance with example
//      In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”
//      When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. 
// 21. currying in JavaScript?  a process in functional programming in which you can transform a function with multiple arguments into a sequence of nesting functions;
// 22. sum (1)(2)(3) for n number of argument
// 23 Progressive web apps?
// 24 How to export and import a module in JavaScript?
// 25 What are the different ways to export a module?
// 26. Tell me about JavaScript performance.
// 27. Minification in JavaScript
// 28. Webpack
// 29. lazy loading
// 30. How you tested your application that it is loading components based on the demand?
// 31. sort array of object by name
            // let Arr=[
            //   {
            //     id:1,
            //     name: "Ketan"
            //   },
            //   {
            //     id:2,
            //     name: "Amit"
            //   }
            // ];
// 32. difference between map and forEach
// 33. local, session and cookie
         // localStorage.setItem(key, value); let a = localStorage.getItem(key); localStorage.removeItem(key); localStorage.clear()
         // sessionStorage.setItem(key, value); let a = sessionStorage.getItem(key); sessionStorage.removeItem(key); sessionStorage.clear();
         // document.cookie = “key=value; expire=Date;path=/”
// 34. memorising in javascript
// 35. Splice and slice difference
// 36. let pe = document.querySelectorAll('div.classname p')

// React
// 1. Which version of ReactJS you are working on and worked on?
// 2. Stateless and stateful components.
// 3. Pure components and why we use it.
// 4. Controlled and uncontrolled components.
// 5. How to handle form elements in uncontrolled components.
// 6. state and props difference.
// 7. setState() is synchronous or asynchronous. explain the scenario how can we handle the case when we need to use updated state immediately.
// 8. how to check prop type in react?
// 9. Lifecycle methods. Explain all.
         // Constructor, getDerivedStateFromProps, render, componentDidMount /
         // getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
         // componentWillUnmount
// 10. In which version hooks introduced and what are the rules for hooks?
// 11. Explain different types of hooks you know.
         // useState(), useEffect(callback, array), useCallback(callback,array), useMemo(callback,array), useSelector(callback), useDispatch()”returns reference to dispatch function from redux store”, useStore().
// 12. Write one example Syntax for useeffect() and useState()
// 13. Difference in useState and useReducer.
// 14. useReducer works on component level or application level.
// 15. How to use useReducer on application level?
// 16. useMemo and useCallback and react.memo.
// 17. What is HOC
// 18. How to replace HOC in functional component.
// 19. How to use custom hooks in application.
// 20. How lazy loading is implemented.
// 21. How to make react application a SPA.
// 22. How to do optimization of react application.
// 23. How to implement TDD in react.
// 24. Accessibility.
// 25. ARIA-Compliance
// 26. How you did performance and security of the application. Explain tools and some issues name.
// 27. If we have an image in a website then how would you know if it is taking long time for downloading.
// 28. Do you know sonar, eslint or browser stack. Explain.
// 29. How you are testing your application on various devices.
// 30. Have I used CICD and what is its usage.
// 31. benefit of react.fragment over using normal element like div?
// 32. profiler in ReactJS
// 33. How to make call API and display data (fetch and Axios)
// 34. on button click change state of text which you previously fetched with API
// 35. Moving project from Class based to functional based component then which hooks will be used.
// 36. What is props drilling?
// 37. What is useContext?
// 38. Error Boundaries? getDerivedStateFromError() – Fallback UI, componentDidCatch() – log error information.

// Redux
// 0. Redux basic principles
         //  Single source of truth – applications global state will be stx`ored in store object
         // State is Read Only – only way to change a state is by emitting actions.
         //        Changes can be done with pure functions only – reducers are pure function
// 1. Why we use redux.
// 2. In functional component there are three level hierarchy of components parent-> child -> grandchild, how to handle state management.
// 3. Which HOC is used in redux.
// 4. how will you connect store with component how will you call actions
// 5. In Pure redux architecture – can we use Api call.
// 6. How to Redirect user to different page e.g., on click of button of homepage redirect to about page.
// 7. How you connect redux with hooks
// 8. what is redux saga. saga with example?
// 9. thunk saga difference? why saga is better?

// Testing Library
// 1. What are the testing libraries you worked on?
// 2. Difference between Jest, Enzyme and RTL.
// 3. Focused on RTL - explain how to test a component using RTL.
// 4. queries for RTL


// Object litrals :=
// Shorthand Property Names:

// You can omit the property name if it matches the variable name used for the property value.
// javascript
// Copy code
// // Before ES6
// let x = 10, y = 20;
// let obj = { x: x, y: y };

// // ES6 and later
// let x = 10, y = 20;
// let obj = { x, y };
// Shorthand Method Names:

// You can omit the function keyword when defining methods inside an object.
// javascript
// Copy code
// // Before ES6
// let obj = {
//   foo: function() {
//     console.log('Hello');
//   }
// };

// // ES6 and later
// let obj = {
//   foo() {
//     console.log('Hello');
//   }
// };
// Computed Property Names:

// You can use expressions for property names.
// javascript
// Copy code
// let prop = 'name';

// // Before ES6
// let obj = {};
// obj[prop] = 'John';

// // ES6 and later
// let obj = {
//   [prop]: 'John'
// };
// Object Method Binding:

// Methods defined in an object are automatically bound to the object.
// javascript
// Copy code
// let obj = {
//   value: 42,
//   getValue() {
//     return this.value;
//   }
// };

// console.log(obj.getValue()); // Outputs 42
// Object Prototype:

// You can directly set the prototype of an object during its creation.
// javascript
// Copy code
// let parent = { x: 10 };

// // Before ES6
// let child = Object.create(parent);

// // ES6 and later
// let child = {
//   __proto__: parent
// };
// These enhancements make object literals more expressive and concise, improving the readability and writability of JavaScript code. They are part of the ongoing effort to make JavaScript more modern and developer-friendly.