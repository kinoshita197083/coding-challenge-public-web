# Zeller Blog Application

## Project Overview

This is a blog application built for the Zeller Web coding challenge. It demonstrates a modern web application that fetches and displays blog content from Contentful CMS.

### Technology Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Contentful CMS**: Headless content management system
- **TypeScript**: Static type checking
- **Jest & React Testing Library**: Testing frameworks

## Project Structure

```
coding-challenge-public-web/
├── __tests__/            # Test files
├── components/
│   ├── blogs/            # Blog-related components
│   ├── callToAction/     # Call to action components
│   ├── home/             # Landing page components
│   ├── layout/           # Layout components
│   ├── Navbar/           # Navigation components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── pages/                # Next.js pages
│   └── blog/             # Blog-specific pages
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Implementation Approach

### Blog List Page
- Displays a list of blog summaries from Contentful
- Features a prominent featured post section
- Implements responsive grid layout for blog cards
- Optimizes images with Next.js Image component

### Blog Detail Page
- Dynamic routing using Next.js `[slug].tsx` pattern
- Rich text content rendering with the Contentful Rich Text renderer
- Custom breadcrumb navigation for improved user experience
- Responsive design for all device sizes

### Performance Considerations
- Server-side rendering for improved SEO and initial load time
- Image optimization using Next.js Image component
- Component-based architecture for code reusability
- TypeScript for type safety and better developer experience

### UI/UX Design
- Clean, modern interface using Tailwind CSS
- Responsive design that works on mobile, tablet, and desktop
- Accessible navigation with semantic HTML
- Consistent styling throughout the application

## Getting Started

### Prerequisites
- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd coding-challenge-public-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. Run the development server:
```bash
npm run dev
```

5. Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Testing

Due to time constraint, the project includes partial test coverage using Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

## Build and Deployment

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

The application is configured for deployment on Vercel.

## Screenshot

![Blog Application Screenshot](https://i.postimg.cc/v8tFqP4z/Screenshot-2025-06-26-at-12-24-48-PM.png)

## Potential Improvements

- Implement pagination for the blog list
- Add search functionality
- Implement categories/tags filtering
