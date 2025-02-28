# Product List and Detail View

## Description
This project is a React-based web application that displays a list of products fetched from an API. Users can search for products, view product details, and add items to their cart. The UI has a dark theme, with a black background and light black cards.

## Features
- Fetch and display a list of products from an API
- Search functionality to filter products by title
- Clickable product cards that navigate to the product detail page
- Display product details including image, title, price, rating, and description
- Ability to adjust the quantity and add products to the cart

## Technologies Used
- React.js
- React Router
- Bootstrap
- React Icons (Lucide React, React Icons)
- Toast notifications

## Installation and Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd product-list-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## File Structure
```
product-list-app/
│── src/
│   ├── components/
│   │   ├── ProductList.js
│   │   ├── ProductDetail.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## API Integration
- The products are fetched using the `fetchProducts` function.
- The product details are fetched using the `fetchProductById` function.

## Search Functionality
- The search input filters products based on the title.
- Implemented with a controlled input state in `ProductList.js`.

## UI Customizations
- Dark theme with a black background and light black cards.
- White text for better readability.
- Search input with white placeholder text.
- Clickable product cards for navigation.

## Usage
1. View the list of products on the homepage.
2. Use the search bar to filter products.
3. Click on a product to view its details.
4. Adjust quantity and add the product to the cart.

## Deployment
- The project can be deployed on Netlify, Vercel, or any static hosting service supporting React.

## Author
Ajay Chauhan

## License
This project is licensed under the MIT License.
#   p r o d u c t s - a p p 
 
 
