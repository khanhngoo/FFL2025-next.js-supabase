# Future Founders Bootcamp 2025 Website

This repository contains the code for the Future Founders Bootcamp 2025 website, which includes application and payment processing.

## Deployment to Vercel

### Required Environment Variables

When deploying to Vercel, you need to set up the following environment variables:

#### Stripe Integration

1. **STRIPE_SECRET_KEY**: Your Stripe secret key for payment processing
   - Get this from your Stripe dashboard
   - Format: `sk_test_...` or `sk_live_...`

2. **STRIPE_WEBHOOK_SECRET**: Your Stripe webhook signing secret
   - Get this when setting up webhooks in your Stripe dashboard
   - Format: `whsec_...`

3. **NEXT_PUBLIC_BASE_URL**: The base URL of your deployed application
   - For production: `https://your-domain.com`
   - For Vercel Preview: `https://your-project-name-git-branch-name.vercel.app`

#### Supabase Integration

4. **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL
   - Found in your Supabase project settings
   - Format: `https://[project-id].supabase.co`

5. **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Your Supabase anonymous key
   - Found in your Supabase project settings under API
   - Format: `eyJ...`

#### Mock Mode Options (for demonstration purposes)

6. **MOCK_STRIPE** (optional): Set to `true` to enable mock mode for Stripe integration
   - This allows deployment without a valid Stripe API key for demonstration purposes
   - The payment flow will use mock data instead of real Stripe sessions

7. **MOCK_SUPABASE** (optional): Set to `true` to enable mock mode for Supabase
   - This allows deployment without a valid Supabase configuration
   - Database operations will be logged but not actually performed

### Setting Environment Variables in Vercel

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add each required variable with its value
4. Click "Save" to apply the changes
5. Redeploy your application for the changes to take effect

## Development Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env.local` file with the required environment variables
4. Run the development server with `npm run dev`

## Testing Payments

For testing payment flows:

- In development, use Stripe test mode with test cards
- For demos without Stripe integration, set `MOCK_STRIPE=true`
- To test success flow, visit `/payment/success?session_id=mock_session_123`
- To test cancel flow, visit `/payment/error`

## Troubleshooting Deployment Issues

If you encounter errors during deployment:

1. Check that all required environment variables are set correctly
2. If you don't have a Stripe account, set `MOCK_STRIPE=true`
3. If you don't have a Supabase account, set `MOCK_SUPABASE=true`
4. Verify that your API keys are valid and have the correct permissions
5. Check the Vercel deployment logs for specific error messages

### TypeScript Errors

If you encounter TypeScript errors during build:

1. We've already disabled some strict TypeScript checks in specific files to accommodate mock implementations
2. If you still encounter TypeScript errors, you can:
   - Check the build logs to identify the specific file and error
   - Modify the problematic file to add appropriate ESLint disable comments
   - For mock implementations using `any` type, add: `/* eslint-disable @typescript-eslint/no-explicit-any */`
   - For unused variables in mock functions, add: `/* eslint-disable @typescript-eslint/no-unused-vars */`
3. For local development, you can use the provided development TypeScript configuration with npm scripts:
   ```bash
   # Switch to development TypeScript configuration
   npm run ts:dev
   
   # Switch back to production TypeScript configuration
   npm run ts:prod
   ```
   
   The development configuration relaxes TypeScript's strict checks to make development easier.

## Mock Mode Deployment

For a quick demo deployment without requiring any external services:

```
MOCK_STRIPE=true
MOCK_SUPABASE=true
NEXT_PUBLIC_BASE_URL=https://your-vercel-url.vercel.app
```

This configuration will allow the application to run with simulated payment processing and database operations.

## Vercel Build Override (For TypeScript Issues)

If you continue to experience TypeScript errors during Vercel deployment, you can override the build command in your Vercel project settings:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > General > Build & Development Settings
3. Override the Build Command with one of these options:
   - `npm run build:loose` (uses our included build script)
   - `cp tsconfig.dev.json tsconfig.json && next build` (manual override)
4. This will use the relaxed TypeScript configuration during build

Note: This approach should only be used for demonstration purposes. For production applications, it's better to properly type your code.

## Building Locally with Relaxed TypeScript Checks

If you're encountering TypeScript errors during local builds, you can use our included scripts:

```bash
# Build with relaxed TypeScript configuration
npm run build:loose

# Switch to development TypeScript configuration
npm run ts:dev

# Switch back to production TypeScript configuration
npm run ts:prod
```
