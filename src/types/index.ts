// Common types used across the application

export interface User {
  id: string
  name: string
  email: string
}

export interface RouteConfig {
  path: string
  element: React.ComponentType
  isPrivate?: boolean
}

// Add more types as needed
