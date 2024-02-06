"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { Navigation } from "../_components/navigation";

import { redirect } from "next/navigation";



// added  the spinner and if not authenticated go back to landing page (/)

const MainLayout = ({

    children 
}: {

    children: React.ReactNode;

}) => {
    const { isAuthenticated, isLoading } = useConvexAuth ();

    if (isLoading) {
        return (

            <div className="h-full flex items-center justify-center">
                <Spinner size="lg"/>
            </div>

        )
    }

// if not Authenticated and signed in redirect the use to the homepage 
    if (!isAuthenticated) {
        return  redirect ("/");
    }

    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <Navigation/>
            <main className="flex-1 h-full overflow-y-auto">
           
            {children}
            </main>
        </div>
    );
}

export default MainLayout;