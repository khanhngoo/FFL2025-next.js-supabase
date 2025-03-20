# Future Founders Bootcamp 2025 Website

This repository contains the code for the Future Founders Bootcamp 2025 website, which includes application and payment processing.

## Deployment to Vercel

### Required Environment Variables

When deploying to Vercel, you need to set up the following environment variables:

1. **STRIPE_SECRET_KEY**: Your Stripe secret key for payment processing
   - Get this from your Stripe dashboard
   - Format: `sk_test_...` or `sk_live_...`

2. **NEXT_PUBLIC_BASE_URL**: The base URL of your deployed application
   - For production: `https://your-domain.com`
   - For Vercel Preview: `https://your-project-name-git-branch-name.vercel.app`

3. **MOCK_STRIPE** (optional): Set to `true` to enable mock mode for Stripe integration
   - This allows deployment without a valid Stripe API key for demonstration purposes
   - The payment flow will use mock data instead of real Stripe sessions

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
3. Verify that your Stripe API key is valid and has the correct permissions
4. Check the Vercel deployment logs for specific error messages
