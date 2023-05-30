# e-Commerce store for ordering tool ⚒️ and equipment 🧰

_this is a first-draft and is subject to change_ 🧑‍💻

---

## Description

This project is a web application for an e-commerce store that sells tools and equipment.

External use:

- Customers can browse the store and add items to their cart.
- Customers can create an account and login to their account.
- Customers can place orders and view their order history.
- Customers can view their cart and checkout.

Internal use:

- authenticated employees can add, edit, and delete products.
- authenticated employees can view and edit the store's inventory.
- authenticated employees can view orders and mark them as shipped.
- authenticated employees can view customers and their order history.

The web-application will be built using the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [React.js](https://reactjs.org/)
- [Azure](https://azure.microsoft.com/en-ca/)

## Notes on routes and functionality

Externally, the web application will have the following routes:

- `/` - the home page of the store. This page will display a list of products.
- `/products/:id` - the product page. This page will display the details of a product.
- `/cart` - the cart page. This page will display the items in the cart.
- `/checkout` - the checkout page. This page will display the items in the cart and allow the user to place an order.
- `/login` - the login page. This page will allow the user to login to their account.
- `/register` - the register page. This page will allow the user to create an account.
- `/account` - the account page. This page will allow the user to view their account details and order history.

Internally, the web application will have the following routes:

- `/admin` - the admin page. This page will allow the user to view the store's inventory and orders.
- `/admin/products` - the admin products page. This page will allow the user to view, add, edit, and delete products.
- `/admin/orders` - the admin orders page. This page will allow the user to view orders and mark them as shipped.
- `/admin/customers` - the admin customers page. This page will allow the user to view customers and their order history.

## Notes on database design

The database will have the following tables:

- `users` - this table will store the user's account information.
- `user_sessions` - this table will store the user's session information.
  - this table is used to keep track of the user's session and allow them to stay logged in.
  - it will be under strict permission-based access.
- `customers` - this table will store the customer's information.
- `products` - this table will store the product information.
- `orders` - this table will store the order information.
- `shipments` - this table will store the shipment information.
