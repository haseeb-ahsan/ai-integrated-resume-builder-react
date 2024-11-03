# AI Integrated Resume Builder

Welcome to the **AI Integrated Resume Builder**! This project leverages AI to assist users in creating polished and professional resumes by providing personalized content suggestions. Built with React, Vite, and Tailwind CSS, this application combines a user-friendly interface with a secure backend to offer an efficient, seamless, and secure experience for users.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI-Generated Content**: Utilizes Google Gemini for personalized resume suggestions, helping users with tailored content to enhance their resumes.
- **Secure Authentication**: Implements Clerk for secure user authentication and authorization to safeguard user data.
- **User-Friendly Interface**: Designed with Tailwind CSS, the interface is intuitive, ensuring a smooth user experience.
- **Efficient Backend**: Powered by Strapi and deployed on render.com, the backend supports dynamic and secure content management.
- **Fast Frontend**: Developed with React and Vite, and hosted on Hostinger, ensuring a fast and responsive user experience.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Strapi, hosted on render.com
- **Authentication**: Clerk
- **AI Integration**: Google Gemini for AI-based resume suggestions
- **Deployment**: Frontend on Hostinger, Backend on render.com

## Screenshots
![Screenshot from 2024-11-03 19-01-49](https://github.com/user-attachments/assets/b0bafd12-0f00-4ecc-80be-9fb49f4e88b8)

![Screenshot from 2024-11-03 19-01-07](https://github.com/user-attachments/assets/693852d0-301a-4887-b6a5-91468081f077)

![Screenshot from 2024-11-03 18-59-50](https://github.com/user-attachments/assets/2879fee8-0ade-4475-a685-b9e4fa6c20b4)

![Screenshot from 2024-11-03 18-59-04](https://github.com/user-attachments/assets/afbbb51f-9b82-466d-a4dc-374f8a44df7d)

![Screenshot from 2024-11-03 18-58-08](https://github.com/user-attachments/assets/9a797b0a-5fb0-4989-b13a-7c2924d772ec)


## Project Structure

The project is organized as follows:

├── client/ # Frontend (React + Vite) │ ├── src/ │ │ ├── components/ # Reusable React components │ │ ├── pages/ # Main application pages │ │ ├── assets/ # Images, icons, etc. │ └── ... ├── server/ # Backend (Strapi) │ ├── config/ # Configuration files for Strapi │ ├── models/ # Database models and schemas │ └── ... ├── README.md # Project documentation └── package.json # Project dependencies and scripts


## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/ai-integrated-resume-builder.git
   cd ai-integrated-resume-builder
   cd client
   npm install
   cd ../server
   npm install

## Run Application:
   cd server
   npm run develop

## Usage

    Sign Up / Log In: Use the Clerk-powered authentication to create an account or log in securely.
    AI-Powered Resume Suggestions: Get personalized resume suggestions based on the AI-powered Google Gemini API.
    Edit and Save Resume: Customize your resume as needed and save it for future use.
    Export Resume: Export your finished resume to PDF or other desired formats.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.
