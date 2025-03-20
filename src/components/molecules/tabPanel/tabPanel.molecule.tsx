import TabButton from '@/components/atoms/tabButton/tabButton.atom';
import React from 'react'



interface TabPanelProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TabPanel:React.FC<TabPanelProps> = ({activeIndex ,setActiveIndex}) => {

  const placesWorked= [
    "Camsol" ,
    "Digital Renter",
    "Nkwa",
  ]
  return (
    <div className=''>
      {placesWorked.map((place, index) => (
        <TabButton active={activeIndex === index} label={place} key={index} onClick={() => setActiveIndex(index)} />
      ))}
    </div>
  );
}

export default TabPanel