# Angular Akita

## Installation

- Way #1
```
npm i @datorama/akita
```

- Way #2
```
npm i @datorama/akita-ngdevtools --save
```

## Structure
Akita is made up of 4 main components:
* Store;
* Actions;
* Query (like `selectors` in NgRx);
* Effects.

## Workflow / Architecture
![Akita lifecycle diagram](./images/akita-workflow.png)

![Akita architecture](./images/akita-architecture.webp)

## High-level principles
1. The Store is a single object which contains the store state and serves as the “single source of truth.”
2. The only way to change the state is by calling `setState()` or one of the update methods based on it.
3. A component should NOT get the data from the store directly but instead, use a Query.
4. Asynchronous logic and update calls should be encapsulated in services and data services.

## References
1. [State Management in Angular Using Akita](https://auth0.com/blog/state-management-in-angular-with-akita-1/) - part 1.
2. [State Management in Angular Using Akita](https://auth0.com/blog/state-management-in-angular-with-akita-2/) - part 2.
