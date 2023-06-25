# React Cart Project

This project is a simple e-commerce cart application built using ReactJS, ContextAPI, and a custom hook for handling HTTP requests.

## Getting Started

To get started, clone this repository to your local machine and navigate to the project directory:

```
git clone https://github.com/ahmedelsharkawy99/react-cart-project.git

cd react-cart-project
```

Next, install the project dependencies:

```
npm install
```

Once the dependencies are installed, you can start the development server:

```
npm start
```

This will start the development server and open the application in your web browser at `http://localhost:3000`.

## Project Structure

The project is structured as follows:

```
react-cart-project/
  public/
    index.html
  src/
    components/
      Cart/
      Layout/
      Meals/
      UI/
      ...
    hooks/
      use-http.js
    context/
      cart-context.js
      CartProvider.js
    App.js
    index.js
    ...
```

- `public/`: Contains the HTML file that serves as the entry point for the application.
- `src/`: Contains the React components, hooks, and context used in the application.
- `components/`: Contains the individual React components used in the application, such as `Cart` and `Meals`.
- `hooks/`: Contains the custom hook for handling HTTP requests, `useHttp`.
- `context/`: Contains the React context used to manage the application state, `CartContext`.
- `App.js`: The main React component that renders the application.
- `index.js`: The entry point for the application.

## State Management

The application state is managed using ContextAPI, which provides a way to share state between components without the need for prop drilling. The `CartContext` component is used to create a context that stores the cart items and provides methods for adding and removing items from the cart.

## HTTP Requests

The application uses a custom hook, `useHttp`, for handling HTTP requests. This hook abstracts away the details of making HTTP requests and provides a simple interface for fetching data from a server. The `useHttp` hook is used in the `AvaliableMeals` component to fetch product data from a server. and send order request to server in the `Checkout` component.
