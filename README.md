# Admin Panel
[Live Demo](https://admin-panel-three-flax.vercel.app/)

## Technologies Used 🛠️
- **Next.js** - React framework for production-grade applications
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Firebase** - Backend and database platform
  - Authentication
  - Firestore Database
  - Real-time updates

## Features ✨
- Modern and responsive dashboard interface
- User authentication and authorization
- Real-time data updates
- Interactive data visualization
- User management system
- Secure data handling

## Prerequisites 📋
- Node.js (v14 or higher)
- npm or yarn
- Firebase account and project setup

## Installation 🚀
1. Clone the repository:
   ```bash
   git clone https://github.com/Parsadgh/admin-panel.git
   cd admin-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file with your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage 💡
Visit [http://localhost:3000](http://localhost:3000) to see the application running locally.

Live version is deployed at: [https://admin-panel-three-flax.vercel.app/](https://admin-panel-three-flax.vercel.app/)

## Project Structure 📁
```
admin-panel/
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── public/        # Static assets
├── styles/        # Global styles and Tailwind config
├── lib/          # Firebase and utility functions
└── ...
```

## Contributing 🤝
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝
This project is licensed under the MIT License.

## Contact 📧
GitHub: [@Parsadgh](https://github.com/Parsadgh)
Project Link: [https://github.com/Parsadgh/admin-panel](https://github.com/Parsadgh/admin-panel)