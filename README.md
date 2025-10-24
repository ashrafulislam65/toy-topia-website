ToyTopia - Kids Toy Marketplace 🧸
A modern and interactive e-commerce platform for buying and selling kids toys built with React, Firebase, and Tailwind CSS.

🚀 Live Demo
Live URL: https://toy-topia-website.web.app/

📖 Project Overview
ToyTopia is a  web application that provides a seamless shopping experience for parents and kids to explore, discover, and purchase various educational and fun toys. The platform features user authentication, product management, and a responsive design.

✨ Key Features
🔐 Authentication & User Management
Secure Registration & Login with email/password

Google Sign-In integration

Password Reset functionality

Protected Routes for authenticated users

User Profile Management with photo and display name

🛍️ Product Features
Toy Catalog with detailed product pages

Product  Filtering

Product Categories 

Seller Information display

Product Availability tracking

🎨 User Experience
Responsive Design for all devices

Modern UI/UX with DaisyUI components

Loading States and smooth animations

Toast Notifications for user feedback

Dynamic Page Titles

🔒 Security & Performance
Firebase Authentication for secure access

Private Routes protection

Environment Variables for secure configuration

Optimized Images and lazy loading

🛠️ Technology Stack
Frontend
React (v18+) - UI Library

React Router  - Client-side routing

Tailwind CSS - Utility-first CSS framework

DaisyUI - Component library for Tailwind CSS

Backend & Services
Firebase Authentication - User management

Firebase Hosting - Deployment

Vite - Build tool and development server

Icons & UI
React Icons - Icon library

React Toastify - Toast notifications

📦 NPM Packages Used
{
  "name": "kid-toys-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "daisyui": "^5.3.7",
    "firebase": "^12.4.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}

🎯 Project Structure
text
src/
├── components/          # Reusable components
│   ├── Slider.jsx
│   ├── Banner.jsx
│   ├── PopularToys.jsx
│   └── Loading.jsx
├── layouts/            # Page layouts
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── MyProfile.jsx
│   ├── DetailsPage.jsx
│   └── OrderHistory.jsx
├── provider/           # Context providers
│   └── AuthProvider.jsx
├── hooks/              # Custom hooks
│   └── useTitle.js
├── firebase/           # Firebase configuration
│   └── firebase.config.js
└── router.jsx          # Application routes
🚀 Installation & Setup
Clone the repository

bash
git clone https://github.com/your-username/toytopia.git
cd toytopia
Install dependencies

bash
npm install
Environment Setup

Create a .env file in the root directory

Add your Firebase configuration:

env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your-project.firebaseapp.com
VITE_projectId=your-project-id
VITE_storageBucket=your-project.appspot.com
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_firebase_app_id
Run the development server

bash
npm run dev
Build for production

bash
npm run build
🌟 Key Pages
Home (/) - Landing page with featured toys and categories

Login (/auth/login) - User authentication

Register (/auth/register) - New user registration

My Profile (/profile) - User profile management

Order History (/orders) - Purchase history (Protected)

Toy Details (/details/:id) - Individual product pages

🔐 Authentication Flow
Registration - Users can create accounts with email verification

Login - Secure authentication with error handling

Google Sign-In - Alternative authentication method

Password Reset - Secure password recovery system

Protected Routes - Automatic redirect for unauthenticated users

🎨 Design Philosophy
Mobile-First responsive design

Accessible components with proper ARIA labels

Consistent color scheme and typography

Intuitive navigation and user flows

📱 Responsive Design
The application is fully responsive and optimized for:

📱 Mobile devices (320px and up)

📟 Tablets (768px and up)

💻 Desktops (1024px and up)

🖥️ Large screens (1440px and up)

🔧 Custom Hooks
useTitle - Dynamic page title management

useAuth - Authentication state management

🚀 Deployment
The project is configured for easy deployment on:

Netlify (Recommended)

Vercel

Firebase Hosting

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

👥 Authors
MD.Ashraful Islam - Initial work - YourGitHub

🙏 Acknowledgments
Firebase team for excellent documentation

Tailwind CSS for the amazing utility framework

React community for continuous improvements

DaisyUI for beautiful pre-built components

Built with ❤️ using React & Firebase