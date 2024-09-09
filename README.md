# 🐾 Animal Adoption and Rescue Website(AdoPet)

Welcome to the Animal Adoption and Rescue Website! This project is a web application built with the MERN stack (MongoDB, Express, React, Node.js) designed to help users adopt and rescue animals.


## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Animal Adoption and Rescue Website allows users to browse available animals, view detailed information, and submit adoption applications. Admins can manage animal listings, view adoption requests, and update animal statuses.
## Features

- **Animal Adoption**: Users can browse and adopt animals available for rehoming.
- **Animal Rescue**: Volunteers within a 15 km radius are notified when an animal needs immediate rescue. This feature ensures that urgent cases are handled promptly by nearby volunteers.
- **User Authentication**: Secure login and registration for both users and admins.
- **Animal Listings**: Browse and filter animals available for adoption.
- **Animal Details**: View detailed information about each animal.
- **Adoption Applications**: Submit and manage adoption applications.
- **Admin Dashboard**: Manage animal listings and view adoption requests.
- **Light/dark mode toggle**

### How It Works:
1. **Animal Rescue Alerts**: When a new rescue request is created, the system calculates the location of the request and identifies volunteers within a 15 km radius.
2. **Notification System**: Volunteers within the specified range receive E-mail notifications about the rescue request, enabling them to respond quickly to the situation.

This application aims to improve the efficiency of animal rescue operations and connect animals in need with caring individuals who can help.


## Installation

To get started with this project locally, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/animal-adoption-rescue.git
```
### 2. Navigate into the project directory:

```bash
cd Animal-Rescue-And-Adoption-WebApp
```

### 3. Install the required dependencies:
Install the dependencies for both Client and Server:
```bash
npm install
```

### 4. Set up environment variables:
Create a `.env` file inside both Client and Server of the project, and add the following environment variables:
```bash
    MONGO_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET
    PORT=5000  # Optional, can be any port you'd like to run the server on
 ```

### 5. Start the development server:
Deploy both the Client and the Server:
 ```bash
#Client
npm start

#Server
nodemon server.js
```

### 6. Open the application in a browser:
Visit `http://localhost:5000` to view the website locally.

### Troubleshooting

- Ensure MongoDB is running locally or is accessible via a service like MongoDB Atlas.
- Double-check that all necessary environment variables are properly configured in your `.env` file.
- If you encounter errors, review the console output for missing dependencies or incorrect configurations.

## Screenshots

Login Page:
![[App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)](https://github.com/321sayantan/Animal-Rescue-And-Adoption-WebApp/blob/main/client/public/assets/ss/Screenshot%202024-09-09%20234228.png)

Registration Page:
![[App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)](https://github.com/321sayantan/Animal-Rescue-And-Adoption-WebApp/blob/main/client/public/assets/ss/Screenshot%202024-08-21%20233030.png)

Home Page:
![[App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)](https://github.com/321sayantan/Animal-Rescue-And-Adoption-WebApp/blob/main/client/public/assets/ss/Screenshot%202024-08-21%20233141.png)

Animal List Page:
![[App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)](https://github.com/321sayantan/Animal-Rescue-And-Adoption-WebApp/blob/main/client/public/assets/ss/Screenshot%202024-08-22%20014935.png)

Location of Animals:
![[App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)](https://github.com/321sayantan/Animal-Rescue-And-Adoption-WebApp/blob/main/client/public/assets/ss/Screenshot%202024-08-22%20015504.png)


## Tech Stack

**Client:** HTML, CSS, Bootstrap, React, JSX.

**Server:** Node, Express.

**DataBase:** MongoDB.

**Authentication:** Google OAuth and JWT.


## Contributing

Contributions are always welcome! If you'd like to contribute, please follow these guidelines:

### 1. Fork the Repository
### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature
```
### 3. Make Your Changes
### 4. Commit Your Changes
```bash
git commit -am 'Add new feature'
```
### 5. Push to the Branch
```bash
git push origin feature/your-feature
```
### 6. Create a Pull Request
## Authors

- [@321sayantan](https://github.com/321sayantan)
- [@CrossOriGenes](https://github.com/CrossOriGenes)


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for more details.
[MIT](https://choosealicense.com/licenses/mit/)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

