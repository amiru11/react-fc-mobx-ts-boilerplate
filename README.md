## React-MobX-TypeScript

This project was bootstrapped with [Create React App v3.3.X](https://github.com/facebook/create-react-app).
React ver.16.12.0

## Build & Development

---

- `npm install` install dependencies
- `npm start` run develop
- `npm run build` run build project

## Features

- React Functional Components
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [MobX v4.X.X](https://mobx.js.org/README.html#mobx-4-vs-mobx-5) for older browser
- [ES7 Decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) for use MobX decorator features
- [ES8 Async/Await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [ES2020 OptionalChaining](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Based on Typescript](https://www.typescriptlang.org/docs/home.html)

## Project Structure

---

```
react-mobx-ts
├── README.md
├── package.json
├── .gitignore
├── .prettierrc
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    └── api
        └── posts.ts
    └── client
        └── Root.tsx
    └── components
        └── common
            ├── Input.tsx
            └── TextArea.tsx
        └── posts
            ├── PostItem.tsx
            └── PostItem.scss
    └── hooks
        ├── usePromise.ts
        └── useStore.ts
    └── lib
        ├── request.ts
        └── utils.ts
    └── pages
        ├── counter
            ├── Counter.tsx
            └── Counter.scss
        ├── home
            ├── Home.tsx
            └── Home.scss
        └── posts
            ├── Posts.tsx
            ├── PostsCreate.tsx
            ├── PostsDetail.tsx
            ├── Posts.scss
            └── PostsDetail.scss
    └── shared
        ├── App.tsx
        └── App.scss
    └── stores
        └── interfaces
            ├── posts.ts
            └── store.ts
        ├── Counter.ts
        ├── Posts.ts
        └── index.ts
    ├── index.scss
    ├── index.tsx
    └── serviceWorker.js
```

## Plugins

외부 플러그인

- [`react-router-dom`](https://github.com/ReactTraining/react-router) Route 선언&제어
- [`axios`](https://github.com/axios/axios) 비동기 Ajax 통신
- [`mobx`](https://github.com/mobxjs/mobx) MobX
- [`mobx-react`](https://github.com/mobxjs/mobx-react) MobX for React
- [`classnames`](https://github.com/JedWatson/classnames) 클래스 제어
