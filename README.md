# Login Challenge - Building Your First Authentication System

Welcome to your authentication login challenge! I'm Swar, and I'll be guiding you through creating your very first login system with a full-stack TypeScript application. This is an exciting journey into modern web development, and I'm here to help you every step of the way.

## What is Authentication?

Authentication is the process of verifying who a user is. Think of it like showing your ID at the airport - you need to prove you are who you say you are before you can access certain areas. In web applications, users provide credentials (username and password) to prove their identity.

**Why Authentication Matters:**

- It protects user data and private information
- It's used by every major website you visit (Google, Facebook, Netflix, etc.)
- Understanding authentication is essential for any full-stack developer
- It teaches you how frontend and backend work together

## Prerequisites

Before we start, make sure you have a basic understanding of:

- **React**: Components, hooks (useState), and basic concepts from the Hello World challenge
- **JavaScript/TypeScript**: Variables, functions, async/await, and basic syntax
- **HTTP Requests**: How to make API calls (fetch)
- **Node.js**: Basic understanding of server-side JavaScript

Don't worry if you're not an expert - we'll learn together and I'll explain everything as we go!

## Getting Started

### Step 1: Install Dependencies

First, let's install all the tools we need for this project:

```bash
npm install
```

This command downloads all the necessary packages (React, TypeScript, Express, testing tools, etc.) that are listed in our `package.json` file.

### Step 2: Start the Development Server

This project has two parts - a frontend (what users see) and a backend (the server that handles requests). Let's start both:

**Terminal 1 - Start the Backend Server:**
```bash
npm run server
```

You should see: `Server is running on http://localhost:3001`

**Terminal 2 - Start the Frontend:**
```bash
npm run dev
```

This will start a development server, and you should see a message telling you to open your browser to `http://localhost:5173`. You'll see your login app running live!

### Step 3: Run Tests

Let's make sure everything is working correctly:

**Unit & Integration Tests:**
```bash
npm run test
```

**End-to-End Tests (tests the full user flow):**
```bash
npm run test:e2e
```

These tests verify that your application meets all the requirements.

### Step 4: Format Your Code

Keep your code clean and readable:

```bash
npm run format
```

This automatically formats your code according to best practices.

## Your Challenge: Build a Login System

Your task is to create a complete authentication login system with both frontend and backend components.

### What You Need to Do

1. **Understand the Structure** - This project has a `client/` folder (frontend) and a `server/` folder (backend)
2. **Frontend Components** - Build a login form with username and password fields
3. **Backend API** - Create an endpoint that validates credentials
4. **State Management** - Handle loading states and error messages
5. **Navigation** - Redirect users to a dashboard after successful login
6. **Security** - Validate input and handle errors gracefully

### Test Users

You can use these test accounts to try logging in:

- **Username:** `testuser`, **Password:** `password123`
- **Username:** `demo`, **Password:** `demo123`

### Key Concepts You'll Learn

- **Full-Stack Development**: How frontend and backend communicate
- **API Integration**: Making HTTP requests with fetch
- **Form Handling**: Managing form state and validation
- **Error Handling**: Showing helpful error messages to users
- **TypeScript**: Type safety across your entire application
- **Zod Validation**: Validating data on the server side
- **React Router**: Navigating between pages
- **Toast Notifications**: Providing user feedback

## Project Structure

```
log-in/
├── client/              # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/      # Login & Dashboard pages
│   │   ├── components/ # UI components (forms, buttons, etc.)
│   │   └── lib/        # Utility functions
│   └── vite.config.ts  # Vite configuration
├── server/              # Express + TypeScript backend
│   ├── routes/         # API endpoints
│   ├── validators/     # Zod validation schemas
│   ├── utils/          # Database utilities
│   └── __tests__/      # Server tests
├── data/               # JSON database (user storage)
├── tests/              # End-to-end tests
└── package.json        # Root package with scripts
```

## Testing Your Work

We have comprehensive tests that check:

✅ **Frontend**: Login form renders correctly  
✅ **Form Handling**: Input validation works  
✅ **API Integration**: Login request succeeds with valid credentials  
✅ **Error Handling**: Proper error messages for invalid login  
✅ **Navigation**: Successful login redirects to dashboard  
✅ **Loading States**: UI shows loading during API calls  
✅ **Security**: Passwords are handled securely  
✅ **Code Quality**: No console errors, proper formatting

Run tests anytime with:

```bash
npm run test      # Unit and integration tests
npm run test:e2e  # Full user flow tests
```

## Available Scripts

### Development

- `npm run dev` - Start the frontend development server
- `npm run server` - Start the backend server
- `npm run build` - Build the client for production

### Testing

- `npm run test` - Run unit and integration tests (Jest)
- `npm run test:e2e` - Run end-to-end tests (Playwright)
- `npm run test:watch` - Run tests in watch mode

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run typecheck` - Check TypeScript types
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Git Workflow

Once you're happy with your code, let's save it to your repository:

### Step 1: Add Your Changes

```bash
git add .
```

### Step 2: Commit Your Work

```bash
git commit -m "Add login authentication system"
```

### Step 3: Push to Repository

```bash
git push origin main
```

## What Happens Next?

After you push your code, our automated grading system will:

1. **Run all tests** to verify your solution
2. **Check code quality** and formatting
3. **Test the full user flow** end-to-end
4. **Provide feedback** on your implementation
5. **Grade your submission** based on the criteria below

## Grading Criteria

Your submission will be evaluated on:

- **Functionality (40%)**: Does the login system work correctly?
- **Code Structure (25%)**: Is the code properly organized and typed?
- **Error Handling (15%)**: Are errors handled gracefully?
- **Testing (10%)**: Do all tests pass?
- **Code Quality (10%)**: Is the code clean, formatted, and error-free?

## Troubleshooting

### Common Issues and Solutions

**Problem**: `npm install` fails

- **Solution**: Make sure you have Node.js installed (version 16 or higher)

**Problem**: Server won't start

- **Solution**: Make sure no other application is using port 3001

**Problem**: Frontend won't start

- **Solution**: Make sure no other application is using port 5173

**Problem**: Login doesn't work

- **Solution**: Make sure both the server AND client are running in separate terminals

**Problem**: Tests fail

- **Solution**: Check that your login form submits correctly and handles errors

**Problem**: Git push fails

- **Solution**: Make sure you're authenticated with GitHub and have push permissions

### Getting Help

If you get stuck:

1. Read the error messages carefully - they usually tell you what's wrong
2. Check the troubleshooting section above
3. Run `npm run test` to see specific test failures
4. Make sure both server and client are running
5. Check the browser console for frontend errors
6. Check the terminal running the server for backend errors

## Success Tips

- **Start with the frontend**: Get the login form working first
- **Test frequently**: Run `npm run test` after each change
- **Read error messages**: They usually tell you exactly what's wrong
- **Use TypeScript**: Let the types guide you - they'll catch errors early
- **Format your code**: Use `npm run format` to keep code clean
- **Test manually**: Try logging in with the test users to see it working
- **Don't give up**: Building authentication is challenging, but you can do it!

## Tech Stack

**Frontend:**
- React 19 - Modern UI library
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first styling
- shadcn/ui - Beautiful component library
- Sonner - Toast notifications
- React Router - Navigation

**Backend:**
- Express - Node.js web framework
- TypeScript - Type-safe backend code
- Zod - Schema validation
- CORS - Cross-origin resource sharing

**Testing:**
- Jest - Unit and integration testing
- Playwright - End-to-end testing

**Build Tools:**
- Vite - Fast build tool
- TypeScript Compiler - Type checking

## Next Steps

Once you complete this challenge, you'll be ready for:

- Advanced authentication (JWT tokens, sessions)
- Password hashing and security
- User registration systems
- Protected routes and authorization
- Building complete full-stack applications

Remember, authentication is a fundamental skill in web development. Every website you use has login functionality, and now you understand how it works!

---

**Good luck, and happy coding!** 🚀

_Swar - Your Full-Stack Development Mentor_
