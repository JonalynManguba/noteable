'use client';
import { Button } from "@/components/ui/button";
import {  ArrowRight } from "lucide-react";


// By adding use client means this won't be a part of the server component but only clients

export const Heading = () => {
    return (
        <div className="max-w-3xl md:ml-3 md:justify-center space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-5xl md:mt-8 font-bold ">
          Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Noteable</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Noteable is the connected workspace where <br />
          better, faster work happens.
        </h3>

        {/* Task create a route here later */}
        <Button className="py-1">
          <span className="mr-1">Enter Noteable</span>
          <ArrowRight/>
        </Button>
        </div>

    )



}

