# Saree Boutique - Premium South Indian Saree E-Commerce

> **Heritage in soul. Modern in execution.**

A premium e-commerce website for a South Indian saree boutique, built with Next.js 14, TypeScript, and Tailwind CSS. This project celebrates traditional craftsmanship while delivering a modern, elegant shopping experience.

## 🎨 Design Philosophy

- **Traditional × Modern**: Cultural authenticity meets contemporary UX
- **Calm Animations**: 350ms transitions for an unhurried, premium feel
- **Generous Spacing**: Whitespace creates breathing room and elegance
- **Elegant Typography**: Serif headings (Crimson Pro) + sans-serif body (Inter)
- **Soft Colors**: Muted maroon, deep green, and soft gold palette
- **Premium Feel**: Every detail carefully considered for quality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Carousel**: Embla Carousel
- **Utilities**: clsx, tailwind-merge

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jayasurya-JK/Saree_Website_Demo.git
cd Saree_Website_Demo
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your WooCommerce API credentials

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── (shop)/              # Shop route group
│   │   ├── page.tsx         # Homepage
│   │   ├── collections/     # Collection pages
│   │   ├── product/         # Product detail pages
│   │   ├── cart/            # Shopping cart
│   │   └── wishlist/        # Wishlist
│   ├── (content)/           # Content route group
│   │   ├── our-story/       # Brand story
│   │   ├── craft/           # Craft & heritage
│   │   └── care-guide/      # Care instructions
│   ├── search/              # Search page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/
│   ├── foundation/          # Layout components
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Typography.tsx
│   │   ├── Grid.tsx
│   │   └── Stack.tsx
│   ├── primitives/          # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Badge.tsx
│   │   └── Divider.tsx
│   ├── composite/           # Composite components (Phase 2)
│   └── features/            # Feature components (Phase 2)
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # App constants
├── styles/
│   ├── tokens.ts            # Design tokens
│   └── animations.ts        # Animation presets
├── store/
│   ├── cartStore.ts         # Shopping cart state
│   ├── wishlistStore.ts     # Wishlist state
│   └── uiStore.ts           # UI state (modals, menus)
├── hooks/                   # Custom React hooks (Phase 2)
└── public/
    ├── fonts/               # Custom fonts (if needed)
    └── images/              # Static images
```

## 🎨 Design System

### Colors

**Background Colors**
- Ivory: `#FAF8F3`
- Warm Beige: `#F5F1E8`
- Paper Texture: `#FEFCF7`

**Primary Colors**
- Maroon: `#7D3C3C` (50-900 shades)
- Deep Green: `#2F5C45` (50-900 shades)
- Indigo: `#3E4A6B` (50-900 shades)

**Accent Colors**
- Soft Gold: `#C9A961`
- Rust: `#A65C3F`
- Sandalwood: `#D4A574`

**Text Colors**
- Primary: `#2D2D2D`
- Secondary: `#6B6B6B`
- Tertiary: `#9CA3AF`

### Typography

- **Serif (Headings)**: Crimson Pro (300-700)
- **Sans (Body)**: Inter (300-700)
- **Tamil (Decorative)**: Noto Sans Tamil (400-700)

### Spacing Scale

Based on 4px (0.25rem) increments: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Breakpoints

- **Mobile**: 0px
- **Tablet**: 640px
- **Desktop**: 1024px
- **Wide**: 1440px

## 🧩 Component Usage

### Foundation Components

```tsx
import { Container, Section, Heading1, Body, Grid } from '@/components/foundation';

<Section spacing="lg" background="warmBeige">
  <Container size="lg">
    <Heading1>Premium Sarees</Heading1>
    <Body>Discover our collection...</Body>
  </Container>
</Section>
```

### Primitive Components

```tsx
import { Button, Input, Badge } from '@/components/primitives';

<Button variant="primary" size="md">Add to Cart</Button>
<Input label="Email" placeholder="Enter your email" />
<Badge variant="success">In Stock</Badge>
```

### State Management

```tsx
import { useCartStore } from '@/store/cartStore';

const { items, addItem, getTotal } = useCartStore();
```

## 🔧 Development Workflow

1. **Start dev server**: `npm run dev`
2. **Lint code**: `npm run lint`
3. **Build project**: `npm run build`
4. **Type check**: `tsc --noEmit`

## 📝 Development Phases

### Phase 1: Foundation Setup ✅
- Design system implementation
- Core component library
- State management setup
- Folder structure and routing

### Phase 2: Coming Soon
- Navigation & header
- Product listing & filtering
- Product detail page
- Cart & checkout flow
- WooCommerce integration

### Phase 3: Coming Soon
- User authentication
- Order management
- Payment integration
- Admin dashboard

## 🤝 Contributing

This is a private project. If you have access and would like to contribute:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 👨‍💻 Author

**Jayasurya JK**

## 📄 License

Private Project - All Rights Reserved