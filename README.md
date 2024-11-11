ECO DELIVERY

 🌍 Eco-Delivery Marketplace

ECO DELIVERY is a sustainable logistics solution that connects eco-conscious consumers and businesses through a centralized platform for eco-friendly goods and green delivery options.


 Features

 🛒 For Consumers
- Eco-Delivery Marketplace: Browse a curated selection of environmentally friendly products.
- Customizable Delivery: Schedule deliveries based on your preferences.
- Reusable Packaging: Reduce waste with sustainable packaging options.

 🚴 For Couriers
- Be a Courier: Join the platform to deliver eco-friendly goods and earn rewards.
- Flexible Scheduling: Choose delivery routes and times that fit your schedule.

 🌟 Platform Highlights
- Secure Access: Two-factor authentication for enhanced user security.
- User-Friendly Interface: Intuitive design for seamless browsing and ordering.
- Community Impact: Support sustainability through green logistics.

Installation

Follow these steps to set up the project locally:

 Prerequisites
- Node.js (v14 or later)
- MongoDB
- Git
- npm (or yarn)

Setup
1. Clone the repository:
   
   git clone https://github.com/NorthernW0lf/ecodelivery.git
   cd ecodelivery
   
2. Install dependencies:
   
   npm install
   
3. Set up the PostgreSQL database:
   - Create a database named ecodelivery.
   - Update the database connection string in .env file:
     
     DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ecodelivery
     
4. Run migrations to set up the database schema:
   
   npx prisma migrate dev
   
5. Start the development server:
   
   npm run dev
   


 Technologies Used

 Backend
•	Node.js: Backend server.
•	Prisma: MongoDB integration.
•	Express: Axios API framework.

 Frontend
•	React.js: Dynamic and responsive user interface.
•	CSS Modules: Modular and maintainable styling.

 Database
•	MongoDB: Relational database for storing user, product, and order data.



Contact

For questions or feedback, reach out to us:
- Email: shahnimiller99@gmail.com
- GitHub: [NorthernW0lf](https://github.com/NorthernW0lf)
