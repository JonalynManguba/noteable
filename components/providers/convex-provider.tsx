// this folder is related with auth.config.js under convex folder 


// next step go to 
"use client";


import React from "react";
import {ConvexReactClient} from "convex/react";
import { ConvexProviderWithClerk} from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convex = new ConvexReactClient (process.env.NEXT_PUBLIC_CONVEX_URL!)


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