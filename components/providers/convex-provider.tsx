// this folder is related with auth.config.js under convex folder 


// next step go to (marketing ) layout.tsx folder 

// Important make sure to always run a npx convex dev along side npm run dev when running to your local host

"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};