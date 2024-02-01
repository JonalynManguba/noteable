import React from 'react'
import { Heading } from './(marketing)/_components/heading';
import {Heroes} from './(marketing)/_components/hero';
import { Footer } from './(marketing)/_components/footer';

// Important Reminder if you got issues with cache you can always use rm -rf .next (this will remove the .next folder ) and npm run dev it will generate a new .next for you

// By adding () on the page title mean it will not show on your url


const  MarketingPage = () => {
  return (
    <div  className='min-h-full flex flex-col'>
{/* justify-center to move the text in the middle of the page */}
      <div className='flex flex-col justify-center text-center gap-y-8 flex-1 px-6 pb-8'>
        <Heading/>
        <Heroes/>
      </div>
      <div>
      <Footer/>

      </div>

    </div>
  );
}
export default MarketingPage;