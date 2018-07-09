![Logo of the project](./public/favicon.png)

# PostApp - Frontend Project

This project is a frontend client for CRUD post and comments using redux with react.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Technical Features:

- React architecture
- Redux architecture

## API Server Backend

The frontend client, depends on the backend API service.

Download the API server code from the [GitHub repository](https://github.com/udacity/reactnd-project-readable-starter).

Install and start the API server:

```
cd api-server
npm install
npm start
```

The API server should be available on [http://localhost:3001](http://localhost:3001) by default.

## App Frontend (PostsApp)

Install dependencies

```bash
npm install or yarn install
```

Start Project

```bash
npm start or yarn start
```

If it runs successfully, you can visit on [http://localhost:3000/](http://localhost:3000/).

## Style

- [AdminLte](https://adminlte.io/themes/AdminLTE/index2.html)
- [Bootstrap](https://getbootstrap.com/docs/3.3/css/)
- [FontAwesome Icons](http://fontawesome.io/icons/)
- [React Materialize](https://react-materialize.github.io)

## Project Organization

```bash
├── README.md - This file.
├── .gitignore # The list of git ignored files
├── package.json # npm package manager file.
├── public #
│   ├── favicon.png # new favicon postApp picture
│   └── index.html # DO NOT MODIFY
└── src #
    ├── api # Utils files for API REST backend
        ├── categories.js # JavaScript backend API methods to work with categories.
        ├── comments.js # JavaScript backend API methods to work with comments.
        ├── config.js # General API config JavaScript backend.
        └── posts.js #JavaScript backend API methods to work with posts.
    ├── category # Files for categories component
        ├── views #Components of categories.
            ├── Link.js # Link categories Component.
            ├── List.js # List categories Component.
            └── Show.js #Show categories Component.
        ├── actions.js #Actions and dispatches categories.
        ├── reducers.js # Reducers categories.
        └── types.js # Constants Types reducers categories.
    ├── comment # Files for comments component
        ├── views #Components of comments.
            ├── Edit.js # Edit comments Component.
            ├── Form.js # Form comments Component.
            ├── List.js # List comments Component.
            └── New.js # New comments Component.
        ├── actions.js #Actions and dispatches comments.
        ├── reducers.js # Reducers comments.
        └── types.js # Constants Types reducers comments.
    ├── default # Files for default Component
        ├── views #Component of default.
            └── Show.js #Show default Component.
        └── actions.js #Actions and dispatches for default Component.
    ├── post # Files for posts component
        ├── views #Components of posts.
            ├── Edit.js # Edit posts Component.
            ├── Form.js # Form posts Component.
            ├── Link.js # Link posts Component.
            ├── List.js # List posts Component.
            ├── Show.js # Show posts Component.
            └── New.js # New posts Component.
        ├── actions.js #Actions and dispatches posts.
        ├── reducers.js # Reducers posts.
        └── types.js # Constants Types reducers posts.
    ├── sort # Files for sort component
        ├── views #Components of sort.
            ├── Control.js # Control sort Component.
            └── Sorted.js # Sorted sort Component.
        ├── actions.js #Actions and dispatches sort.
        └── reducers.js # Reducers sort.
    ├── utils # Utils files
        ├── img # Image
            └── user-icon.png # Icon for component user
        └── helpers.js # Useful general functions
    ├── App.js # App Component Default Core
    └── index.js # default injection ReactRouterRedux, Redux, Reducers, ReduxThunk and AppComponent
```
