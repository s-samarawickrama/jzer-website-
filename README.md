# JZER Salon App

This is a modern, interactive web application for the JZER Salon, built with high-performance 3D background rendering and complex CSS animations to provide a premium, luxury feel.

## Architecture & Technologies

- **Framework**: React 19 (via Vite)
- **3D Rendering**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Vanilla CSS (`index.css`) with custom fonts (Oswald, Outfit), CSS variables, and modern glassmorphism techniques.
- **Icons**: Lucide React
- **Architecture Pattern**: Component-Based Architecture separating global UI (Cursor, Particles, Background), Layouts (Navbar, Footer), and Sections (Hero, Services, About, Testimonials).

## File Structure

The project has been structured into a clean, industry-standard component hierarchy:

```
jzer-app/
├── public/                 # Static assets (images, logos, etc.)
├── src/
│   ├── components/
│   │   ├── common/         # Reusable global elements
│   │   │   ├── Background.jsx  # Three.js 3D environment wrapper
│   │   │   ├── Cursor.jsx      # Custom SVG cursor
│   │   │   └── Particles.jsx   # Ambient floating particles
│   │   ├── layout/         # Structural layout components
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   └── sections/       # Main landing page sections
│   │       ├── About.jsx
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       └── Testimonials.jsx
│   ├── hooks/
│   │   └── useMouseEffects.jsx # Custom hook managing complex DOM interactions
│   ├── App.jsx             # Root component tying everything together
│   ├── index.css           # Global stylesheet and animations
│   └── main.jsx            # Application entry point
├── package.json
└── vite.config.js
```

## Running the Application Locally

The project uses [Vite](https://vitejs.dev/) as its build tool and development server.

1. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. **Accessing the App via Localhost Port:**
   By default, Vite will host the application on port `5173`. 
   Open your browser and navigate to:
   **http://localhost:5173**

   *(Note: If port 5173 is already in use, Vite will automatically assign the next available port, e.g., 5174. Check your terminal output for the exact URL).*

## Building for Production

To create an optimized production build:

```bash
npm run build
```
This will generate a `dist` folder ready to be deployed to any static hosting provider.
