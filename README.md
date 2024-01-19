
# Pizza Shop Application Documentation

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Pizza Order Form](#pizza-order-form)
5. [Order Limit Check](#order-limit-check)
6. [Pizza Stages Implementation](#pizza-stages-implementation)
7. [Time Tracking](#time-tracking)
8. [Main Display Section](#main-display-section)
9. [Order Actions](#order-actions)
10. [Bonus Features](#bonus-features)
11. [Testing](#testing)
12. [Technologies Used](#technologies-used)
13. [Contributing](#contributing)
14. [License](#license)

## Overview

This React.js application simulates a pizza restaurant's behavior. It provides a user interface to place pizza orders, tracks the progress of each order through different stages, and displays relevant information such as time spent and order status.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd pizza-shop-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure

The project follows a modular structure to enhance maintainability and readability. Key directories include:

- `src/components`: Contains React components.
- `src/styles`: Holds styling files.
- `public`: Includes static assets.

## Pizza Order Form

The pizza order form allows users to configure and place pizza orders. It includes fields for selecting pizza type (Veg, Non-Veg), size (Large, Medium, Small), and base (Thin, Thick). Validation ensures all required fields are filled before submission.

## Order Limit Check

The application enforces a maximum order limit of 10. If this limit is reached, a message is displayed, and further orders are restricted until the restaurant can handle more.

## Pizza Stages Implementation

Orders progress through stages: Order Placed, Order in Making, Order Ready, and Order Picked. Pizzas in the same stage for over 3 minutes are highlighted in red.

## Time Tracking

Each pizza order has a timer that tracks the time spent in each stage. This information is displayed on the pizza card.

## Main Display Section

The main display section shows all pizzas in progress, including their remaining time and order ID. It also provides a count of total pizzas delivered today.

## Order Actions

Users can cancel orders at any stage before reaching the "Ready" stage. Buttons allow manual movement of pizzas to the next stage, marking them as picked, or canceling the order.

## Bonus Features

1. **Sort Orders Based on Delay:**
    - Orders are sorted based on delays in each stage.
    
2. **Different Making Time for Pizza Sizes:**
    - Pizza sizes have different making times: 3 min (Small), 4 min (Medium), 5 min (Large).

3. **Redux Integration:**
    - State management is handled using Redux.

## Testing

The application has been thoroughly tested to ensure correct functionality and responsiveness on various screen sizes.

## Technologies Used

- Vite (React + JavaScript)
- Redux
- HTML/CSS
- JavaScript

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to further customize the documentation based on your specific project details and requirements.