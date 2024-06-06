# Personal Bookshelf

## Overview

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf using localStorage.

## Features

- **Book Search Page**:

  - Input field for searching books by name.
  - Real-time search results displayed as the user types.
  - Search results displayed in a list of cards.
  - Add books to a personal bookshelf.
  - Button to navigate to the personal bookshelf page.

- **Personal Bookshelf Page**:
  - Displays books added from the search results.
  - Persistent storage using localStorage.

## Tech Stack

- React (Vite)
- TailwindCSS for styling
- Open Library API for book data
- Web Storage API (localStorage) for persistent bookshelf storage

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MuskanGarg24/bookshelf.git
   cd personal-bookshelf
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

4. **Open the application in your browser**:
   - The app should be running on `http://localhost:5173/`

## Deployment

You can deploy the application on a hosting platform of your choice, such as Netlify. Follow the platform-specific instructions to deploy your React app.
`https://bookshelftask.netlify.app/`

## API Usage

The application uses the Open Library API to fetch book data. The search query is formatted as follows:
`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`
