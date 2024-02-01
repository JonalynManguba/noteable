import Image from "next/image";

export const Heroes = () => {
    return (
        <div className='flex  items-center justify-center max-w-5xl'>
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:h-[400px] md:w-[400px]">
                    <Image
                    src= "/reading.png"
                    fill
                    className= "object-contain "
                    alt="Hero"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                    // src= "/reading.png"
                    src= "/hero-light.svg"
                    fill
                    className= "object-contain "
                    alt="Hero"
                    />
                </div>
         
            </div>
        </div>
    );
}

