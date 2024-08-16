# CodioSphere

**Live Demo:** Check out the live demo of CodioSphere [here](https://codiosphere.vercel.app/).

CodioSphere is a real-time collaborative code editor designed to facilitate seamless teamwork among developers. With CodioSphere, you can code together in real-time, making collaboration on projects efficient and hassle-free.

## Key Features

- **Real-time Collaboration**: Work together with your team members in real-time, seeing changes instantly as they are made.
- **Language Support**: CodioSphere supports various programming languages, including C,C++,Java,Javascript and Python making it versatile for different projects.
- **User-friendly Interface**: An intuitive and easy-to-use interface makes collaboration effortless.
- **Customizable Code Editor**: Powered by Monaco Code Editor , the code editor in CodioSphere is highly customizable and provides a smooth coding experience.
- **Room Management**: Create new rooms for collaboration sessions, each with a unique room ID generated using the nanoId library.
- **User Authentication**: Sign in with a username and room ID for secure collaboration session.

## Technologies Used

- Frontend:
  - React.js
  - Material-UI
  - React Toast
  - React Avatar
  - Code Monaco
- Backend:
  - Node.js
  - Express.js
- WebSocket Library:
  - Socket.IO

## Installation

To get started with CodioSphere, follow these simple steps:

1. Clone the project repository:
   ```bash
   git clone https://github.com/AdityaJ2305/CodioSphere.git
   ```

2. Navigate into the project directory:
   ```bash
   cd CodioSphere
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```

## Usage

Once installed, you can run CodioSphere locally:

1. Start the server:
   ```bash
   npm start
   ```

2. Access CodioSphere in your browser at `http://localhost:3000`.

3. Sign in with your username and room ID. If the room ID is not available, click on "New Room" to generate a new room ID using the UID library.

4. Start collaborating with your team members in real-time!

