# Simple Blog Site

**Simple Blog Site** is a React-based single-page application (SPA) designed for managing blog posts. It provides users with an intuitive and responsive interface to create, read, update, and delete blog posts (CRUD operations). The project uses **JSON Server** to simulate a backend for storing blog data, making it an excellent example of front-end development with a mock API.

## 🌟 Features

- **View Blog Posts**: Displays a list of all blog entries with their titles, descriptions, and timestamps.
- **Detailed Blog View**: Read full details of each blog post by clicking on the title.
- **Create New Blog**: Add new blog posts using a simple form.
- **Edit Blog Posts**: Update existing posts with new content.
- **Delete Blog Posts**: Remove blog posts permanently.
- **Responsive Design**: Adaptable layout that works seamlessly on various devices and screen sizes.
- **JSON Server Integration**: Backend is simulated using JSON Server, allowing dynamic interaction with blog data.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Before running the project, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation Steps

1. **Clone the repository**:

   Open your terminal and run:

   ```bash
   git clone https://github.com/HARSHITBHANUSHALI/Simple-Blog-Site.git
   cd Simple-Blog-Site
   ```

2. **Install dependencies**:

   Install the project’s dependencies using npm:

   ```bash
   npm install
   ```

3. **Set up JSON Server**:

   Start the JSON Server (a simple mock backend) on port 8000 to handle the blog data:

   ```bash
   npx json-server --watch db.json --port 8000
   ```

4. **Run the React app**:

   In a separate terminal window, start the React development server:

   ```bash
   npm start
   ```

5. **Open in browser**:

   Visit the app in your browser at `http://localhost:3000` while JSON Server runs at `http://localhost:8000`.

## 🔧 Usage

Once the app is running:

- **Home Page**: Lists all blog posts. Click on any blog title to view the full content.
- **Create New Blog**: Use the "Create New Blog" button to navigate to the form for adding a new post.
- **Edit Blog**: While viewing a post, click the "Edit" button to update it.
- **Delete Blog**: Click the "Delete" button to remove the blog.

## 📚 Dependencies

- **React**: A JavaScript library for building user interfaces.
- **JSON Server**: A full fake REST API for simulating a backend.
- **React Router**: For managing navigation and routing.
- **Axios**: For making HTTP requests to interact with the JSON Server.
- **CSS**: Custom styling for the user interface.

## 🛠️ Development & Customization

To customize the blog or extend its functionality, follow these guidelines:

1. **Adding new pages**: Add new page components to the `src/pages/` directory and configure them within `React Router` in `App.js`.
2. **UI changes**: Modify the `src/components/` directory for reusable elements like headers and forms, and adjust styles in `src/styles/App.css`.
3. **Database modifications**: The blog data is stored in `db.json`. You can pre-populate the database with new data entries before starting the app.

## 🚩 Known Issues

- **Limited Backend Functionality**: As JSON Server is a mock backend, data will reset upon stopping the server. For persistent data, consider integrating with a real backend service like **MongoDB** or **Firebase**.

## 📧 Contact

For any inquiries or feedback, feel free to reach out:

- GitHub: [HARSHITBHANUSHALI](https://github.com/HARSHITBHANUSHALI)
- Email: bhanuharshit04@gmail.com
