# Apple iPhone Clone

A stunning, interactive 3D clone of the Apple iPhone website built with modern web technologies. This project showcases advanced React development with Three.js for 3D rendering, GSAP for smooth animations, and Tailwind CSS for responsive design.

## 🚀 Features

- **3D iPhone Model**: Interactive 3D iPhone model with color customization
- **Smooth Animations**: GSAP-powered scroll-triggered animations
- **Responsive Design**: Fully responsive across all devices
- **Video Integration**: Embedded video content with custom controls
- **Modern UI**: Clean, Apple-inspired design with Tailwind CSS
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js** - 3D graphics library for WebGL rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP** - High-performance animation library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Sentry** - Error tracking and monitoring

### Routing
- **React Router DOM** - Client-side routing

## 📦 Dependencies

### Production Dependencies
```json
{
  "@gsap/react": "^2.1.2",
  "@react-three/drei": "^10.7.6",
  "@react-three/fiber": "^9.4.0",
  "@sentry/browser": "^10.22.0",
  "@sentry/react": "^10.22.0",
  "@sentry/vite-plugin": "^4.6.0",
  "gsap": "^3.13.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.5",
  "three": "^0.181.0"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.36.0",
  "@types/node": "^24.6.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "autoprefixer": "^10.4.21",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.18",
  "typescript": "~5.9.3",
  "typescript-eslint": "^8.45.0",
  "vite": "^7.1.7"
}
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd apple-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR) for fast development.

### Building for Production
```bash
npm run build
```
Builds the application for production. The build artifacts will be stored in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues and style violations.

## 🏗️ Project Structure

```
apple-clone/
├── public/
│   ├── assets/
│   │   ├── images/     # Static images
│   │   └── videos/     # Video assets
│   └── models/         # 3D model files
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Iphone.tsx
│   │   ├── Model.tsx
│   │   └── ...
│   ├── utils/          # Utility functions
│   │   ├── animations.ts
│   │   └── index.ts
│   ├── constants/      # Application constants
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 🎨 Key Components

### 3D iPhone Model (`Iphone.tsx`)
- Auto-generated from GLTF model using gltfjsx
- Dynamic color changing functionality
- Optimized for web performance

### Animation System (`utils/animations.ts`)
- GSAP-based animation utilities
- Scroll-triggered animations
- Smooth transitions and effects

### Responsive Layout
- Mobile-first design approach
- Tailwind CSS for responsive utilities
- Custom breakpoints for optimal viewing

## 🔧 Configuration

### TypeScript Configuration
The project uses two TypeScript configurations:
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Node.js tooling configuration

### ESLint Configuration
- Modern flat config format
- TypeScript-aware linting rules
- React-specific rules included

### Tailwind CSS
- Custom configuration in `tailwind.config.js`
- PostCSS processing with autoprefixer
- Utility-first approach for styling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in the `dist/` directory can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=your_api_url
VITE_SENTRY_DSN=your_sentry_dsn
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes and is not affiliated with Apple Inc.

## 🙏 Acknowledgments

- Apple Inc. for the original design inspiration
- Three.js community for 3D graphics capabilities
- React ecosystem for amazing developer experience
- All contributors and maintainers of the open-source libraries used

---

Built with ❤️ using React, Three.js, and modern web technologies.
