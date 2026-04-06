# 📊 Finance Dashboard

## 🔗 Live Link
[**View Live Application**](https://finance-dashboard-nine-snowy.vercel.app/)

This project is a submission for the Frontend Developer assignment. It demonstrates clean UI design, robust state management, and full-stack capabilities by building a comprehensive personal finance dashboard.

---

### 🔑 Demo Access (Quick Login)
Want to jump straight in without creating an account? Use these test credentials to explore a fully populated dashboard and test the simulated Role-Based Access Control (Admin vs. Viewer):
* **Email:** `test1@gmail.com`
* **Password:** `test1@user`

---

## 📸 Screenshots

<table align="center" width="100%">
  <tr>
    <td width="50%" align="center">
      <img src="./public/preview1.png" alt="" width="100%" style="border-radius:8px;" />
    </td>
    <td width="50%" align="center">
      <img src="./public/preview2.png" alt="" width="100%" style="border-radius:8px;" />
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img src="./public/preview3.png" alt="" width="100%" style="border-radius:8px;" />
    </td>
    <td width="50%" align="center">
      <img src="./public/preview4.png" alt="" width="100%" style="border-radius:8px;" />
    </td>
  </tr>
</table>

---

## 🧠 Overview of Approach

While the assignment permitted the use of mock data and a pure frontend setup, I chose to build a **fully functional full-stack application** to demonstrate production-ready engineering practices.

- **Architecture:** The application uses **Next.js (App Router)** for the frontend, communicating with a custom Edge-compatible API built with **Hono.js**. Data is persisted in a serverless **Neon PostgreSQL** database via **Drizzle ORM**.
- **State Management:** I used a hybrid approach rather than a single global store:
  - **Server State:** **TanStack React Query** handles all API fetching, caching, and optimistic UI updates, keeping the UI perfectly in sync with the database without complex `useEffect` logic.
  - **Client/UI State:** **Zustand** manages lightweight local state, such as sheet/modal visibility and the simulated Role-Based Access Control (RBAC).
  - **URL State:** Data filters (date ranges, account selections) are stored directly in the URL parameters. This makes the dashboard state shareable and bookmarkable.

---

## ✨ Explanation of Features

### Core Requirements

- **1. Dashboard Overview:** \* Features top-level summary cards for Total Remaining, Income, and Expenses.
  - Includes a highly dynamic charting system: users can toggle the time-based visualization between Area, Line, and Bar charts, and toggle the categorical visualization between Pie, Radar, and Radial charts.
- **2. Transactions Section:** \* A robust, interactive data grid built with TanStack Table.
  - Displays Date, Payee, Category, and Amount. Amounts dynamically render with Primary (Income) or Destructive (Expense) badges.
  - Includes column sorting and a search/filter interface.
- **3. Basic Role-Based UI (RBAC Simulation):** \* As per the assignment guidelines, RBAC is simulated entirely on the client side without backend enforcement.
  - I created a `useRole` Zustand store. Users can toggle between **"Admin"** and **"Viewer"** using the dropdown in the top navigation bar.
  - When set to "Viewer", the UI automatically adapts to a read-only state by dynamically disabling or hiding the "Add New", "Import", "Edit", and "Delete" actions across the dashboard.
- **4. Insights Section:** \* A dynamic grid that analyzes the currently filtered dataset to provide actionable observations.
  - Calculates the **Highest Spending Category**, the user's **Savings Rate** (Remaining / Income), and a **Cash Flow Status** warning if expenses exceed income for the period.

### Optional Enhancements Included

- **CSV Import/Export Tool:** Built a drag-and-drop CSV import feature using `react-papaparse` that includes an interactive table for users to map CSV columns to the database schema. alongside a custom export button for seamless data backups.
- **Data Persistence & Real API:** Full backend integration with PostgreSQL, ensuring data persists across sessions.
- **Clean UI/UX:** Built with Tailwind CSS and Shadcn UI. Features loading skeletons to prevent layout shift, empty states for missing data, and a fully responsive mobile-sheet navigation menu.

---

## 🛠️ Tech Stack

**Frontend:**

- **Next.js (App Router):** For optimized routing and server-side rendering capabilities.
- **Tailwind CSS & Shadcn UI:** For a clean, accessible, and highly responsive user interface.
- **TanStack React Query:** Manages server state, caching, and optimistic UI updates.
- **Zustand:** Handles lightweight client-side UI state (e.g., modal visibility and RBAC simulation).
- **Recharts & TanStack Table:** For complex data visualizations and grid management.

**Backend:**

- **Hono.js:** Lightweight, Edge-compatible API routes.
- **Neon PostgreSQL:** Serverless relational database.
- **Drizzle ORM:** Type-safe database queries and migrations.
- **Clerk:** Secure user authentication.

---

## 🛠️ Setup Instructions

To run this full-stack application locally, you will need to configure a PostgreSQL database and Clerk authentication.

### Prerequisites

- Node.js (v18+)
- A free [Neon Database](https://neon.tech/) account
- A free [Clerk](https://clerk.com/) account for authentication

### 1. Clone the repository

```bash
git clone https://github.com/rupeshpatil27/finance-dashboard.git
cd finance-dashboard
```

### 2. Install dependencies

```bash
npm insall
```

### 3. Environment Setup

Create a .env.local file in the root and add your credentials:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
NEXT_PUBLIC_CLERK_SIGN_UP_URL=...
NEXT_PUBLIC_APP_URL=...
DATABASE_URL=...
```

### 4. Database Initialization

```bash
npm run db:generate
npm run db:migrate
```

### 5. Launch Development Server

```bash
npm run dev
```
