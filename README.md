# PizzaPapa Documentation

Welcome to the PizzaPapa documentation! This guide provides information on the architecture, features, usage, and license for the PizzaPapa web application.

## Table of Contents

1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Features](#features)
4. [Usage](#usage)
5. [Dependencies](#dependencies)
6. [Configuration](#configuration)
7. [License](#license)

## Overview

PizzaPapa is a web application designed to streamline the pizza ordering process and provide a real-time tracking system for users. The application allows users to place pizza orders and track their status through different stages, such as "Order Placed," "Order Making," "Order Ready," and "Order Picked."

## Folder Structure

The project follows a structured folder organization for better code maintainability:

```plaintext
pizza-papa/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|       |-- utils/
|   |-- pages/
|   |-- slices/
|   |-- store/
|   |-- styles/
|   |-- App.jsx
|   |-- index.css
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
|-- ... (other configuration files)
```

For detailed information on each directory, please refer to the [Folder Structure](#folder-structure) section in the README.

## Features

1. **Order Placement:**

   - Users can place pizza orders by selecting pizza type, size, and base.
   - Input validation ensures a valid pizza configuration.

2. **Order Tracking:**

   - Orders move through different stages: "Order Placed," "Order Making," "Order Ready," "Order Picked."
   - Each stage has a visual representation on the Stage page.

3. **Navigation:**

   - Navigation bar for easy access to Home, Orders, and Stage pages.
   - Responsive design for both desktop and mobile.

4. **Redux State Management:**

   - Redux store with slices to manage application state.

5. **Time Tracking:**
   - TimeDifference component to calculate and display the time duration between order stages.

For more details on the features, please refer to the [Features](#features) section in the README.

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/pizza-papa.git
   ```

2. **Install Dependencies:**

   ```bash
   cd pizza-papa
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

4. **Open in Browser:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

For detailed instructions on usage, please refer to the [Usage](#usage) section in the README.

## Dependencies

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)

For a complete list of dependencies and versions, please refer to the [package.json](/package.json) file.

## Configuration

PizzaPapa requires minimal configuration. The primary configurations include:

- Redux store setup in the [store](/src/store) directory.
- Routing configurations in the [App.jsx](/src/App.jsx) file.

For more details on configuration, please refer to the [Configuration](#configuration) section in the README.

## License

PizzaPapa is licensed under the [MIT License](LICENSE).

For more details on the license, please refer to the [License](#license) section in the README.

---

Thank you for choosing PizzaPapa! If you have any questions or need further assistance, feel free to reach out.

Happy coding!
