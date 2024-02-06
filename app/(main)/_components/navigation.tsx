"use client";

export const Navigation = () => {

    return (

        // aside is best ti use in articles, sidebars, callouts or pullout quotes, advertiseent and additional info 

        //Important -- The <aside> element in HTML is used to mark up content that is tangentially related to the content around it but could be considered separate from the main body of text. This content could be considered as a sidebar, callouts, or any information that adds extra context or is supplementary to the main content, but isn't essential to its understanding. The content inside an <aside> element should make sense even if it is read independently of the main content.

        // overflow-y-auto ensures that content remains accessible even in tight spaces by allowing vertical scrolling.
            <aside className="group h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
                <div>
                    <p>Action Items</p>
                </div> 
                <div className="mt-4">
                    <p>Documents</p>
                </div>
                <div
                className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
                />
            </aside>
    )


}