# Adulla Pooja - Personal Portfolio Website

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Smooth scroll navigation with fixed navbar
- Dark mode toggle with theme persistence
- Responsive design (mobile, tablet, desktop)
- Framer Motion animations on all sections
- Contact form with validation (react-hook-form + Zod)
- Project showcase with tech tags
- Skills grid with icons
- Modern color palette with gradient accents

## Tech Stack

- React 18 + TypeScript
- Vite (port 3000)
- Tailwind CSS v4
- Framer Motion
- react-hook-form + Zod
- lucide-react + react-icons
- next-themes (dark mode)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/julieee-pooj/PORTFOLIO-VS.git
cd PORTFOLIO-VS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will automatically open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Sections

- **Navbar** - Fixed navigation with dark mode toggle and mobile menu
- **Hero** - Landing section with animated intro
- **About** - Personal bio with avatar
- **Skills** - Grid showcase of technical skills
- **Projects** - Featured project cards with tech tags and links
- **Contact** - Validated contact form with social links
- **Footer** - Site credits

## Customization

- Update content in component files in `src/components/`
- Modify colors in `tailwind.config.ts`
- Adjust animations in individual component files
- Update social links in `Contact.tsx`

## License

MIT License - feel free to use this as a template for your own portfolio.
