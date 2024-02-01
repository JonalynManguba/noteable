import { Navbar } from "./_components/navbar";




const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 

    // Dark Theme color edit here 
    <div className="h-full dark:bg-[#030504]">
      <Navbar/>
      <main className="h-[100vh] pt-40">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;