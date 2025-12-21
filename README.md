# Test Frontend

A React.js frontend project with TypeScript, Vite, React Query, Zustand, and Tailwind CSS.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── libs/          # Utility functions and third-party integrations
├── routes/        # Route definitions
├── pages/         # Page-level components
├── constants/     # Application constants and query keys
├── store/         # Zustand store definitions
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # General utility functions
├── services/      # API service functions
├── interceptors/ # HTTP request/response interceptors
└── assets/        # Images and SVGs
    ├── images/
    └── svgs/
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Routes

- `/` - Test page
- `/test` - Test page
- `/home` - Test page
- `/about` - Test page

## Docker

### Development

```bash
docker-compose up
```

The application will be available on `http://localhost:3000`

### Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```

The application will be available on `http://localhost:80`

### Build Docker Image

```bash
docker build -t test-frontend .
```

### Docker Commands

```bash
# Build and run development
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Production build and run
docker-compose -f docker-compose.prod.yml up --build -d
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **React Query (TanStack Query)** - Server state management
- **Zustand** - Client state management
- **react-hot-toast** - Toast notifications
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Docker** - Containerization
- **Nginx** - Production web server

