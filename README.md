# DripDeals - Real-Time E-Commerce Deal Aggregator

DripDeals is a full-stack web application designed to aggregate the best e-commerce deals from a private Telegram channel and display them to users in real-time. This project leverages a Node.js backend to listen to a Telegram client, parse unstructured message data, and instantly push new deals to a modern React frontend using WebSockets.

**Live Site:** https://dripndeals.vercel.app

##  Features

* **Real-Time Deal Feed:** New deals from the Telegram channel appear on the website instantly without needing a page refresh, using  **Socket.IO**.
* **Automated Data Pipeline:** A Node.js service connects directly to the Telegram API, automatically parsing messages to extract structured data like product titles, prices, and URLs.
* **Dynamic Image Handling:** Automatically downloads media from messages, uploads it to **Cloudinary**, and handles deals with or without images gracefully on the frontend.
* **Server-Side Filtering & Pagination:** Efficiently browse deals by store (Amazon, Flipkart, etc.). The API is paginated to handle thousands of deals without compromising performance.
* **Responsive UI:** A clean and modern user interface built with **React** and **Tailwind CSS**, fully responsive for all screen sizes.
* **Shimmer Loading States:** A professional user experience with shimmer loading effects while deals are being fetched from the API.


##  Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React, React Router, Tailwind CSS, Axios, Socket.io-client, Vite |
| **Backend** | Node.js, Express.js, Socket.IO |
| **Database** | MongoDB with Mongoose |
| **Services** | Telegram API (`telegram` library), Cloudinary (for image hosting) |
| **Deployment** | Vercel (Frontend), Vercel (Backend) |


### Backend Setup

1.  **Clone the repository:**
    ```
    git clone https://github.com/sunnysai27/telegram-project-dripndeals.git
    cd dripdeals/backend
    ```
2.  **Install dependencies:**
    ```
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```
    PORT=4000
    MONGODB_URI=your_mongodb_connection_string
    API_ID=your_telegram_api_id
    API_HASH=your_telegram_api_hash
    SESSION_ID= # Leave this blank initially
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```
4.  **Generate a Telegram Session:**
    Run the backend once to log in and generate a session string. This is an interactive, one-time setup.
    ```
    npm start
    ```
    Follow the prompts in your terminal to enter your phone number and login code. After a successful login, a session string will be printed to the console. Copy this string and paste it into the `SESSION_ID` variable in your `.env` file.
5.  **Run the backend server:**
    ```
    npm start
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```
    cd ../frontend
    ```
2.  **Install dependencies:**
    ```
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the `frontend` directory and add the backend URL:
    ```
    VITE_BACKEND_API=http://localhost:4000
    ```
4.  **Run the frontend development server:**
    ```
    npm run dev
    ```

## 📈 Future Improvements

* **User Accounts:** Allow users to sign up and save their favorite deals.
* **Search Functionality:** Implement a search bar to find specific products.
* **Price Drop Alerts:** Allow users to set alerts and receive notifications when a product's price drops.
* **Admin Dashboard:** A private dashboard to manually manage deals and view analytics.
