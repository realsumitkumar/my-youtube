# my-youtube

my-youtube is a YouTube clone application built using React and Redux. It features video search, video playback, live chat, and other functionalities similar to YouTube.

# Project Link

https://sumit-youtube.vercel.app/

## Features

- **Video Search:** Search for videos with real-time suggestions.
- **Video Playback:** Watch videos directly within the app.
- **Live Chat:** Participate in live chats while watching videos.
- **Responsive UI:** A user-friendly interface with a dynamic sidebar.

# Debouncing

typing slow= 200ms
typing fast = 20ms

Performance :
-iphone pro max = 14 letter _ 1000 users = 140000
-with debouncing = 3 api calls _ 1000 = 3000 , so the performance is greatly improved

Debouncing with 200ms
-if difference b/w 2 key strokes is <200 ms- declince API call
-if >200 make an API call

# Cache

    time complexity to search in array = O(n)
    eg ["i","ip","iph"]

    time complexity to search in map/object = O(1)
    eg {
        i:
        ip:
        iph:
    }

# Live chat feature

    -Web sockets - whatapp chat
        WebSockets provide a full-duplex communication channel over a single, long-lived connection between the client (browser) and the server. This allows real-time data transfer without the overhead of HTTP requests.

    -API Polling eg-youtube chat, cricbuzz
        API polling involves making repeated HTTP requests to a server at predefined intervals to fetch updated data. This approach is simpler to implement but can lead to higher server load and latency compared to WebSockets for real-time updates.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/realsumitkumar/my-youtube.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-youtube
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the application:
   ```sh
   npm start
   ```

## Code Structure

### `App.js`

- **App Component:**
  - Sets up the main structure of the application.
  - Configures routes using `react-router-dom`.
  - Wraps the application with Redux's `Provider`.

### `Head.js`

- **Head Component:**
  - Contains the search bar with debouncing functionality.
  - Displays search suggestions from YouTube's API.
  - Handles menu toggle actions.

### `Body.js`

- **Body Component:**
  - Layout structure containing `Sidebar` and main content using `Outlet`.

### `Sidebar.js`

- **Sidebar Component:**
  - Displays navigation links when the menu is open.
  - Collapses when the menu is closed.

### `VideoContainer.js`

- **VideoContainer Component:**
  - Fetches and displays a list of videos from YouTube's API.
  - Includes higher-order component `AdVideoCard` for promotional content.

### `VideoCard.js`

- **VideoCard Component:**
  - Displays individual video information.
  - Used within `VideoContainer` to map through video data.

### `LiveChatsContainer.js`

- **LiveChatsContainer Component:**
  - Manages live chat functionality.
  - Dispatches random messages at intervals and handles user messages.

### `LiveChats.js`

- **LiveChats Component:**
  - Displays individual live chat messages.

### `WatchPage.js`

- **WatchPage Component:**
  - Renders video player and associated components like live chat and comments.

### Redux Slices

- **appSlice.js:**
  - Manages the state of the sidebar menu.
- **searchSlice.js:**
  - Caches search results to optimize API calls.
- **chatSlice.js:**
  - Handles live chat messages and manages their state.

### `constants.js`

- Defines various constants used throughout the application, such as API URLs and keys.

## This project is a YouTube clone built using React and Redux, featuring video search, video playback, live chat, and a responsive UI. The code is structured to be modular, with components for each major feature and Redux slices to manage state.
