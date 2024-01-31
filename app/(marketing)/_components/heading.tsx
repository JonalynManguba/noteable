'use client';

// By adding use client means this won't be a part of the server component but only clients

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Noteable</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Noteable is the connected workspace where <br />
          better, faster work happens.
        </h3>
        </div>

    )



}

