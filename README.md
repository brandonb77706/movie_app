# 🎬 Movie Finder App

A cross-platform movie discovery mobile application that allows users to search for movies, view detailed information, and explore trending recommendations. The app is built with **React Native** for a seamless iOS and Android experience and uses **Appwrite** as the backend to manage user data and power a popularity-based trending movies algorithm.

---

## 🚀 Features

* 🔍 **Movie Search** – Search for movies and instantly view details such as title, overview, and release information
* 📄 **Movie Details** – Access detailed information for each movie in a clean, mobile-friendly interface
* ⭐ **Trending Movies** – Discover popular movies through a recommendation algorithm based on popularity metrics
* 👤 **User Management** – Secure storage of user data handled through Appwrite
* 📱 **Cross-Platform** – Runs on both iOS and Android from a single codebase

---

## 🛠️ Tech Stack

**Frontend**

* React Native
* TypeScript

**Backend**

* Appwrite

**Other**

* REST APIs for movie data
* Popularity-based recommendation logic

---

## 🧠 Recommendation Algorithm

The trending movies list is generated using a custom popularity-based algorithm that ranks movies based on engagement and popularity metrics. This ensures users are shown relevant and currently popular content rather than static recommendations.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-finder-app.git
   cd movie-finder-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT_ID=your_project_id
MOVIE_API_KEY=your_movie_api_key
```

---

## 📈 Future Improvements

* Personalized movie recommendations
* User watchlists and favorites
* Advanced filtering by genre and ratings
* Improved recommendation algorithms

---

## 📄 License

This project is licensed under the MIT License.

---
