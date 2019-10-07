- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use class components to stay familiar with the syntax because legacy code bases will probably not be re-factored.

- [ ] Name three lifecycle methods and their purposes.

1) Render is the lifecycle method that tells react what will be mounted to the screen.
2) The Constructor is the method that initializes local state by assigning an object to `this.state`. It can also be used to bind event handlers.
3) ComponentDidMount is invoked immediately after a component is mounted and allows us to call setState immediately.

- [ ] What is the purpose of a custom hook? 

Custom hooks allows us to extend multiple pieces of stateful logic.

- [ ] Why is it important to test our apps?

Testing is important to protect code quality and confidence in the code.