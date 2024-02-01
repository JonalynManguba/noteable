import { Navbar } from "./_components/navbar";




const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full text-black">
      <Navbar/>
      <main className="h-[100vh] pt-40">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;