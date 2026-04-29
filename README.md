# BE-FIT

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black.svg)]
[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)]
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)]
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-316192.svg)]
[![Prisma](https://img.shields.io/badge/Prisma-7.7.0-3794A4.svg)]
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**BE-FIT** is a comprehensive fitness and wellness platform that combines social features, gamification, and personalized coaching to help users achieve their health goals. Built with Next.js, React, and PostgreSQL, BE-FIT offers a complete ecosystem for gym members, home workout enthusiasts, coaches, and business partners.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Agents & Automation](#agents--automation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Management
- ✅ Role-based access (User, Admin, Coach, Business)
- ✅ JWT Authentication with secure sessions
- ✅ Email verification & password reset
- ✅ Profile management with avatars

### Program Enrollment
- ✅ Gym & Local Home Workout tracks
- ✅ Free & Paid membership tiers
- ✅ Admin approval workflow for new sign-ups
- ✅ Subscription status tracking

### Fitness Tracking
- ✅ AI-assisted calorie counter
- ✅ Daily water intake logging
- ✅ Points accumulation system
- ✅ Level progression with unlockable avatars

### Gamification
- ✅ Real-time leaderboard (segmented by track)
- ✅ Monthly champion recognition
- ✅ Gallery showcasing top performers
- ✅ Badges & achievements

### Social Features
- ✅ Feed posts (2/day for paid members)
- ✅ Status stories (24-hour visibility)
- ✅ Likes, follows, and engagement
- ✅ Cross-platform sharing (LinkedIn, Instagram, etc.)

### Counselling System
- ✅ 4×10 minute call packages (500 PKR)
- ✅ Time slot management
- ✅ Booking & reminder system
- ✅ Call credit tracking

### Business & Admin
- ✅ Product promotion system
- ✅ Partner management
- ✅ Admin approval dashboard
- ✅ Fee status management
- ✅ Audit logging

### Notifications
- ✅ Firebase Cloud Messaging
- ✅ In-app notifications
- ✅ Email & SMS alerts
- ✅ Subscription reminders
- ✅ Daily workout & points reminders

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | PostgreSQL with Prisma ORM |
| **Authentication** | JWT (jose library), bcryptjs |
| **Email** | Nodemailer |
| **Hosting** | Vercel-optimized |

## Project Structure

```
befit/
├── app/
│   ├── api/                 # API routes (REST & Next.js)
│   ├── about/               # About page
│   ├── features/            # Features showcase
│   ├── forgot-password/     # Password recovery
│   ├── login/               # User authentication
│   ├── pricing/             # Membership pricing
│   ├── programs/            # Program selection
│   ├── reset-password/      # Password reset
│   ├── signup/              # User registration
│   ├── verify-email/        # Email verification
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
├── lib/                    # Utility functions & helpers
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Database migrations
├── public/                 # Static assets & favicon
├── AGENTS.md               # Agent system documentation
├── .env.example            # Environment template
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind CSS config
└── tsconfig.json           # TypeScript configuration
```

## Installation

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm
- PostgreSQL 15+
- Prisma CLI (installed as dev dependency)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/befit.git
   cd befit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your database URL and other secrets.

4. **Initialize the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   # or for production
   npx prisma migrate dev
   ```

5. **Seed initial data (optional):**
   ```bash
   npx prisma db seed
   ```

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/befit"

# JWT Secret
JWT_SECRET=your_super_strong_jwt_secret_here

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Firebase (for notifications - optional)
FIREBASE_API_KEY=your_firebase_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_bucket.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# Stripe (for payments - optional)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. Install PostgreSQL on your system
2. Create a new database:
   ```sql
   CREATE DATABASE befit;
   ```
3. Update the `DATABASE_URL` in `.env`
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

## Running the Application

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will auto-update as you make changes to the code.

### Production Build

```bash
npm run build
npm start
```

The production server will start on port 3000 by default.

### Linting

```bash
npm run lint
```

## Agents & Automation

BE-FIT implements a sophisticated agent system for automation. See [AGENTS.md](AGENTS.md) for complete details.

### Active Agents

| Agent | Purpose | Trigger |
|-------|---------|---------|
| **AI Assistance** | Caloric intake tracking & points | User logs food |
| **Notification** | Automated alerts | Event-based |
| **Admin Approval** | Registration review | User signs up |
| **Points & Leveling** | Points accumulation | Activity completed |
| **Leaderboard** | Rankings & standings | Points update |
| **Gallery Curation** | Champion recognition | End of month |
| **Business Promotion** | Product broadcast | Admin approval |
| **Counselling Booking** | Call scheduling | User requests |
| **Feed & Social** | Post/story management | User uploads |
| **Fee Status** | Membership tracking | Periodic check |

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/verify-email` - Email verification

### Users
- `GET /api/users/me` - Current user profile
- `PUT /api/users/me` - Update profile
- `GET /api/users/leaderboard` - Get leaderboard

### Programs
- `GET /api/programs` - List available programs
- `POST /api/programs/enroll` - Enroll in a program
- `GET /api/programs/enrollments` - User's enrollments

### Fitness Tracking
- `POST /api/food-logs` - Log food/calories
- `GET /api/food-logs` - Get food logs
- `POST /api/water-logs` - Log water intake
- `GET /api/water-logs` - Get water logs
- `GET /api/points` - Get user points & level

### Social
- `POST /api/posts` - Create a post
- `GET /api/posts` - Get feed posts
- `POST /api/posts/:id/like` - Like a post
- `POST /api/stories` - Create a story
- `GET /api/stories` - Get active stories

### Counselling
- `GET /api/counselling/slots` - Available time slots
- `POST /api/counselling/book` - Book a slot
- `GET /api/counselling/bookings` - User's bookings

### Admin
- `GET /api/admin/approvals` - Pending approvals
- `POST /api/admin/approvals/:id/approve` - Approve request
- `POST /api/admin/approvals/:id/reject` - Reject request
- `GET /api/admin/users` - All users
- `GET /api/admin/promotions` - Promotion requests
- `POST /api/admin/gallery` - Manage gallery

## Database Schema

The database is built with PostgreSQL and Prisma ORM, featuring:

- **Users** - Core user accounts with roles & profiles
- **Program Enrollments** - Track & tier memberships
- **Membership Subscriptions** - Active periods & renewal
- **Points System** - Progress tracking & level tiers
- **Food & Water Logs** - Daily fitness tracking
- **Leaderboard** - Competitive rankings
- **Gallery** - Champion showcases
- **Feed Posts & Stories** - Social content
- **Counselling** - Booking & scheduling
- **Promotions** - Business partner campaigns
- **Notifications** - Multi-channel alerts
- **Payments** - Stripe transaction records
- **Admin Logs** - Audit trail

See [prisma/schema.prisma](prisma/schema.prisma) for the complete schema.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Prisma for all database operations
- Implement proper error handling
- Maintain consistent code style
- Add tests for new features
- Update documentation as needed

## Testing

Currently, the project uses manual testing. For automated testing:

```bash
# Run basic checks
npm run lint

# TypeScript type checking
npx tsc --noEmit
```

## Deployment

### Vercel (Recommended)

1. Import the project in [Vercel](https://vercel.com)
2. Set up environment variables
3. Configure PostgreSQL connection
4. Deploy!

### Self-Hosting

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```
3. Use PM2 or similar for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name befit -- start
   pm2 save
   pm2 startup
   ```

## Roadmap

- [x] Core authentication system
- [x] Program enrollment workflow
- [x] Points & leveling system
- [x] Social feed implementation
- [x] Notification system
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered workout recommendations
- [ ] Live class streaming
- [ ] Wearable device integration

## Support

- **Documentation**: [AGENTS.md](AGENTS.md)
- **Issues**: [GitHub Issues](https://github.com/your-username/befit/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/befit/discussions)

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

**BE-FIT** - Build your best self, one rep at a time.

*Built with ❤️ using Next.js, React, and PostgreSQL*
