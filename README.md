# Lelungo ✈️

> **Discover hidden travel deals before everyone else. Smart insights for smarter trips.**

Lelungo is a premium, AI-powered travel discovery application designed to feel like a high-end fintech platform. It aggregates flight and hotel deals and provides users with intelligent, data-driven insights (e.g., price drop confidence, booking velocity) to help them make informed booking decisions.

![Lelungo Hero Section](/absolute/path/placeholder-image-if-available.jpg) <!-- Update with actual screenshot later -->

## ✨ Features

### Premium UI/UX & Physics
- **Fintech Aesthetic:** A sophisticated dark mode featuring a deep navy canvas (`#0B0F1A`), avoiding harsh pure blacks, complemented by vibrant Gold and Royal Purple accent gradients.
- **Hardware-Accelerated Animations:** Buttery smooth 60fps animations powered by Framer Motion, utilizing `translateZ(0)` and `will-change` to eliminate layout thrashing.
- **Scroll Physics:** Interactive parallax destination images, background gradient shifts, and glowing orbs that react dynamically to your scroll depth.
- **Micro-Interactions:** Custom `shadow-glow-active` states, floating CTAs with auto-scroll, and auto-looping social proof marquees that pause on hover.

### Core Functionality
- **Smart Search Bar:** Context-aware destination and date inputs.
- **High-Conversion Deal Cards:** Displays real-time discounts, FOMO indicators (e.g., "Only 3 seats left"), and simulated AI confidence scoring.
- **AI Insight Feed:** An infinite-scrolling feed of market intelligence (e.g., "Jakarta → Singapore now 28% cheaper based on 3-year seasonal trends").
- **Social Proof Carousel:** Authentic user testimonials mapped to an infinite CSS marquee.

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database / Auth:** [Supabase](https://supabase.com/) (PostgreSQL) — *Currently using deterministic mock data engine, ready for live DB connection.*

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/lelungo.git
   cd lelungo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```text
lelungo/
├── src/
│   ├── app/                 # Next.js App Router (Pages, Layout, Global CSS)
│   ├── components/          # Reusable UI components (Navbar, Footer, DealCards, etc.)
│   ├── hooks/               # Custom React hooks (e.g., useInViewAnimation)
│   ├── lib/                 # Utility functions and mock data engines
│   └── types/               # TypeScript definitions
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration and custom animations
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Theme Architecture

Lelungo utilizes a robust CSS-variable based theme system. 
By defining tokens like `--background`, `--foreground`, and `--gradient-start` in `globals.css`, the application seamlessly swaps between its "Stripe-like" Clean Light Mode and its "Luxury Fintech" Dark Mode without requiring heavy JavaScript re-renders.

---
*Built with ❤️ for travelers who want the best deals.*
