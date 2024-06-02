# MERN Movies Project Client

This is the client-side application for the MERN Movies Project. It's a web application built with React that allows users to browse, search, and get detailed information about movies. Users can also mark movies as favorites.

## View Live

The application is deployed on Vercel and can be viewed at [website](https://wmovies.iuh-mern.id.vn/).

## Tech Stack

This project appears to be a React application, bootstrapped with Create React App.

![Create React App](https://img.shields.io/badge/-Create%20React%20App-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/-Babel-F9DC3E?logo=babel&logoColor=black&style=for-the-badge)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/MERN-Movies-Project-Client.git
cd MERN-Movies-Project-Client
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## Project Structure

The main code for the application is located in the `src` directory. This includes React components, hooks, context providers, and utility functions. The `public` directory contains static files that are served by the application.

### Components

The application is built using a number of reusable components. These include:

-   **Button**: A reusable button component.
-   **Image**: A component for displaying images with a fallback if the image fails to load.
-   **SlugLink**: A component for creating links with slugs.
-   **MovieDetailsInfo**: A component for displaying detailed information about a movie.

### Contexts

The application uses React Context for state management. The `useAuth` context provides authentication state and functions, and the `useMovieDetails` context provides state and functions related to the currently viewed movie.

### Hooks

The application uses custom hooks for various features. The `useTV` hook is used to determine if the current device is a TV.

### Utilities

The application includes various utility functions in the `utils` directory. These include functions for formatting dates and making HTTP requests.

## Deployment

See the section about deployment for more information on how to deploy the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
