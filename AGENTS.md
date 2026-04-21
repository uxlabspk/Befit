# BE-FIT — AGENTS.md

This document defines the AI agents, agentic roles, and automated systems within the BE-FIT fitness platform. It serves as a reference for developers integrating intelligent/automated behavior across the application.

---

## Overview

BE-FIT uses several agents and automated systems to enhance the user experience, support admin operations, and drive engagement through gamification and personalization.

---

## 1. AI Assistance Agent

**Purpose:** Helps users track their caloric intake and earn points toward level progression.

**Trigger:** User interacts with the calories counter feature on their profile/dashboard.

**Responsibilities:**

- Accept food name input from the user (typed or suggested)
- Identify nutritional/calorie data for the entered food
- Calculate and award points based on caloric goals
- Guide users toward their next fitness level

**Access Level:** Available to all paid and unpaid program members.

**Integration Points:**

- User Profile (calories counter widget)
- Points & Level System
- Dashboard

---

## 2. Notification Agent

**Purpose:** Sends automated, timely notifications to keep users engaged and informed.

**Trigger:** Event-based (subscription dates, daily schedules, product updates).

**Responsibilities:**

- Send **Subscription Ending** alerts before membership expiry
- Send **Daily Workout Reminders** to active members
- Send **Daily Points Collection Reminders** to encourage calorie logging
- Notify members of **New Product Introductions** in the Store
- Notify members of **Promoted Products** from business partners

**Technology:** Firebase

**Access Level:** All registered users (program members and store-only customers).

---

## 3. Admin Approval Agent

**Purpose:** Manages the review and approval workflow for new member registrations and program sign-ups.

**Trigger:** A user submits a sign-up or program enrollment form.

**Responsibilities:**

- Receive and queue user sign-up submissions (name, email, photo, address, optional fee proof)
- Present pending approvals to the Admin Panel
- Enable admin to **approve** or **reject** applicants
- On approval: activate the user account and assign the appropriate program tier
- On rejection: notify the user with a reason

**Access Level:** Admin only.

**Integration Points:**

- Admin Panel → Approval Review
- Login/Registration System
- JWT Authentication

---

## 4. Points & Leveling Agent

**Purpose:** Tracks user activity and automatically manages point accumulation and level advancement.

**Trigger:** User completes a tracked activity (logs food, logs water, uploads a post, etc.).

**Responsibilities:**

- Award points for calorie counter entries
- Award points for daily water intake logging
- Track cumulative points against level thresholds
- Promote user to next level when threshold is reached
- Update the **Leaderboard** in real time
- Unlock **animal avatar changes** for paid members upon level-up

**Access Level:** All program members (paid and unpaid).

**Integration Points:**

- User Profile (View Current Level, Total Points)
- Leaderboard
- Avatar System

---

## 5. Leaderboard Agent

**Purpose:** Maintains and displays ranked standings of members by points and level.

**Trigger:** Any points update event.

**Responsibilities:**

- Rank members by total points and current level
- Display member name, avatar, and level on the leaderboard
- Segment leaderboard by:
  - **Gym Members** (paid & unpaid)
  - **Local Home Workout Users** (paid & unpaid)
- Identify and surface the **Champion of the Month** for the Gallery

**Access Level:** All program members.

---

## 6. Gallery Curation Agent

**Purpose:** Manages champion recognition content in the Main Gallery.

**Trigger:** End of month — admin reviews leaderboard results.

**Responsibilities:**

- Surface the top-ranked **Gym Member Champion of the Month**
- Surface the top-ranked **Local Home Workout Champion of the Month**
- Hold gallery entries for exactly **one month**, then archive/replace
- Populate the **Main Gallery** with champion photos (uploaded by Admin)

**Access Level:** Admin uploads; public viewing.

**Gallery Tabs:**
| Tab | Content | Managed By |
|---|---|---|
| Main Gallery | Champions with highest points/level of the year | Admin |
| Member Champion | Gym member champion of the month | Admin |
| Local Home Champion | Home workout champion of the month | Admin |

---

## 7. Business Promotion Agent

**Purpose:** Distributes promotional content from business partners to relevant members.

**Trigger:** Admin receives and approves a business promotion request.

**Responsibilities:**

- Receive inbound promotion requests (via email or phone)
- Admin reviews and approves product promotion
- Broadcast **product picture + description** to all program members
- Optionally facilitate contact between the promoting brand and the **Champion of the Year** via admin-mediated contact

**Access Level:** Admin manages; members receive notifications.

---

## 8. Counselling Booking Agent

**Purpose:** Manages scheduling of counselling calls between members and coaches/admins.

**Trigger:** User clicks the **Request Counselling** button on their profile.

**Responsibilities:**

- Allow users to request a counselling session (4 calls × 10 minutes per package)
- Display available time slots (admin-configurable)
- Confirm bookings and send reminders
- Track remaining counselling call credits per user

**Access Level:** Paid and unpaid program members (counselling is a paid add-on at 500 PKR).

**Integration Points:**

- Admin Panel → Call Bookings & Edit Call Time
- User Profile → Request Counselling Button
- Notification Agent (reminder alerts)

---

## 9. Feed & Social Agent

**Purpose:** Powers the social feed, post visibility, likes, follows, and status stories.

**Trigger:** User uploads a post or status story.

**Responsibilities:**

- Accept up to **2 posts per day** from paid members
- Display posts publicly (visible to all users for likes and follows)
- Manage **Status Stories** (Today's Thought — text or image, 24-hour visibility)
- Track **Likes and Followers** per user
- Enable cross-platform sharing (LinkedIn, Instagram, Facebook, WhatsApp Status)

**Access Level:**

- Posting: Paid program members
- Viewing/Liking/Following: All registered users

---

## 10. Fee Status Agent

**Purpose:** Tracks and displays membership fee status for gym members.

**Trigger:** Periodic check or admin update.

**Responsibilities:**

- Display current fee status on the user's profile (paid/unpaid/overdue)
- Alert users approaching subscription end via the Notification Agent
- Provide admin visibility into member fee records

**Access Level:**

- Users: View own fee status only
- Admin: View and edit all member fee statuses

---

## Agent Interaction Map

```
User Action
    │
    ├──► AI Assistance Agent ──► Points & Leveling Agent ──► Leaderboard Agent
    │                                                               │
    ├──► Feed & Social Agent                                        ▼
    │                                                   Gallery Curation Agent
    ├──► Counselling Booking Agent ──► Notification Agent
    │
    └──► Admin Approval Agent ──► Fee Status Agent

Admin Action
    │
    ├──► Business Promotion Agent ──► Notification Agent
    ├──► Gallery Curation Agent
    └──► Admin Approval Agent
```

---

## Technology Stack for Agents

| Component                 | Technology                            |
| ------------------------- | ------------------------------------- |
| AI Assistance             | Anthropic Claude API (or similar LLM) |
| Notifications             | Firebase Cloud Messaging              |
| Authentication & Sessions | JWT                                   |
| Backend Runtime           | Node.js                               |
| Database                  | MongoDB                               |
| Payment Triggers          | Stripe Webhooks                       |
| Front-end Framework       | React                                 |
| Deployment                | AWS                                   |

---

## Notes for Developers

- All agents that modify user data must go through **authenticated API endpoints** protected by JWT.
- The **Notification Agent** should be implemented as a background job/cron service (e.g., using Firebase Functions or Node.js cron).
- The **Points & Leveling Agent** must be atomic — point updates should use MongoDB transactions to prevent race conditions.
- The **Admin Approval Agent** should include audit logging for all approve/reject actions.
- The **AI Assistance Agent** integration should degrade gracefully if the AI API is unavailable (fallback to manual entry).
