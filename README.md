😂 Random Jokes App (React + Axios)
A fun and responsive Random Jokes App built using React.js and Axios. It fetches jokes from a public API and displays them in a modern card layout with pagination support.

🚀 Features
-Fetch random jokes from API
-Pagination (Next / Previous)
-Loading state handling
-Modern UI with Tailwind CSS
-Fully responsive design
-Smooth hover animations

🛠️ Tech Stack
-Frontend: React.js (Hooks)
-HTTP Client: Axios
-Styling: Tailwind CSS
-API: FreeAPI Random Jokes

📂 Project Structure
src/
│── App.jsx
│── main.jsx
│── index.css

⚙️ Installation & Setup

1.Clone the repository
git clone https://github.com/your-username/random-jokes-app.git
cd random-jokes-app

2.Install dependencies
npm install

3.Run the project
npm run dev

🔗 API Endpoint
https://api.freeapi.app/api/v1/public/randomjokes?page=1

🔄 Pagination Logic
-Uses page state to manage current page
-Fetches new jokes whenever page changes
-Buttons are disabled when:
    -No previous page
    -No next page
    -While data is loading

🧠 Concepts Used
-React Hooks (useState, useEffect)
-API handling with Axios
-Conditional rendering
-Optional chaining (?.)
-Responsive UI design

📌 Future Improvements
-Search jokes
-Save favorite jokes
-Categories filter
-Dark/Light mode toggle

👨‍💻 Author
Ajay Kumar

⭐ Support
If you like this project, give it a ⭐ on GitHub!


