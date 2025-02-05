/*import React from 'react';
import TitleSubtitle from '@/components/TitleSubtitle'; 

const Page = () => {
  return (
    <div className='md:max-w-[1920px]'>
      <TitleSubtitle title='Our Chef' subtitle='Chef'/>
    </div>
  );
};

export default Page;
*/
/*import React from 'react';
import TitleSubtitle from '@/components/TitleSubtitle';

const Page = () => {
  // Debugging: Ensure valid props are passed
  console.log('Rendering Page Component');

  return (
    <div className='md:max-w-[1920px]'>
      <TitleSubtitle title='Our Chef' subtitle='Chef' />
    </div>
  );
};

export default Page;
*/
// TitleSubTitle.tsx
import React from "react";

interface TitleSubTitleProps {
  title: string;
  subtitle: string;
}

const TitleSubTitle: React.FC<TitleSubTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center my-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default TitleSubTitle;
