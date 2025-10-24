# DevOps & MLOps Club Website

Official website for the DevOps & MLOps Club at KLE Technological University.

## About

Building the Cloud-Native Future at KLE Tech. Empowering students with real-world DevOps and MLOps skills through hands-on workshops, industry partnerships, and cutting-edge projects.

## Development Setup

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080` with hot-reload enabled.

## Tech Stack

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library with hooks and modern patterns
- **shadcn/ui** - Beautiful and accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Deployment

The site is configured for GitHub Pages deployment with the base path `/devopsandmlops-kletech/`. 

To deploy:
1. Run `npm run build` to create the production build
2. Deploy the `dist` folder to your hosting platform

## Contributing

We welcome contributions from club members! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
