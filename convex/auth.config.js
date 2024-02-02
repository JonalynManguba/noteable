// get the issuer link from JWT Templates -> Convex from Clerk

// step 2 to Deploy the changes install npx convex dev see this link for referrence https://docs.convex.dev/auth/clerk

// npm install @clerk/clerk-react is installed 

// Go to components -> providers -> convex-provider.tsx to check next steps 

export default {
    providers: [{
        domain: "https://warm-pup-26.clerk.accounts.dev",
        applicationID: "convex",
    }, ]
};