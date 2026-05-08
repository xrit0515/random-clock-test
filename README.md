# Clock Reading Test App

A React app to practice reading analog clocks. The app displays a random clock with hour and minute hands and challenges you to identify the time.

## Features

- 🕐 **Random Clock Display** - Generates random times at 5-minute intervals
- ✓ **Answer Reveal** - Click "Show Answer" to check your reading
- 🔄 **Next Question** - Generate a new random clock time
- 🔢 **Toggle Numbers** - Show/hide clock numbers for different difficulty levels
- 🎨 **Clean UI** - Built with React and Tailwind CSS

## Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown (typically `http://localhost:5173`)

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Technologies

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Time Format

Times are displayed in 12-hour format with 5-minute intervals:
- 12:00, 12:05, 12:10, ..., 12:55
- 1:00, 1:05, 1:10, ..., 11:55
A html app to generate random clock reading test for primary 1 students
