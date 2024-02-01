import { useState, useEffect} from "react";


        // - This hook is related to Navbar


export const useScrollTop = (threshold = 10 ) => {
    const [scrolled, setScrolled] = useState (false)


    useEffect (()  =>  { 




        // Important Notes:


        // function if the window scrollY is larger than threshold setScrolled is true, otherwise if the user goes back to the top setscroll is set to false.


        

        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled (true);
            } else {
                setScrolled (false);
            }

        };

        window.addEventListener ("scroll", handleScroll); 

        return () => window.removeEventListener ("scroll", handleScroll); 

    }, [threshold]);

        return scrolled; 

}