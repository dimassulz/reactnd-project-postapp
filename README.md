![Logo of the project](./public/favicon.png)

# MyReads Project 
This project is a example React App for add books on categorized shelfs.

## Technical Features:
* React architecture
* Validation with prop-types

### API Server Backend

The frontend client, depends on the backend API service.

Download the API server code from the [GitHub repository](https://github.com/udacity/reactnd-project-readable-starter).

Install and start the API server:

```
cd api-server
npm install
npm start
```

The API server should be available on [http://localhost:3001](http://localhost:3001) by default.

### App Frontend (PostsApp)
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

* [AdminLte](https://adminlte.io/themes/AdminLTE/index2.html)
* [Bootstrap](https://getbootstrap.com/docs/3.3/css/)
* [FontAwesome Icons](http://fontawesome.io/icons/)
* [React Materialize](https://react-materialize.github.io)

## Project Organization

```bash
├── README.md - This file.
├── .gitignore # The list of git ignored files
├── package.json # npm package manager file. 
├── public #
│   ├── favicon.png # new favicon Leitura picture
│   └── index.html # DO NOT MODIFY
└── src #
    ├── api # Utils files for API REST backend
        ├── categories.js # JavaScript backend API methods to work with categories.
        ├── comments.js # JavaScript backend API methods to work with comments.
        ├── config.js # General API config JavaScript backend.
        └── posts.js #JavaScript backend API methods to work with posts.
    ├── category # Files for categories component
        ├── views #Components of categories.
            ├── Link.js # Link categories.
            ├── List.js # List categories.
            └── Show.js #Show categories.
        ├── actions.js #Actions categories.
        ├── reducers.js # Reducers categories.
        └── types.js # Constants Types reducers categories.
    ├── comment # Files for categories component
    ├── default # Files for default component
    ├── post # Files for posts component
    ├── sort # Files for sort component
    ├── utils # Utils files
        ├── img # 
            ├── user-icon.png # Icon for user
        ├── Icon # Icon Font Awesome Component 
        ├── index.js # Useful general functions
        └── UserImg.js # User Image Component 
    ├── App.js # App Component Default Core
    └── index.js # default injection ReactRouterRedux, Redux, Reducers, ReduxThunk and AppComponent
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
