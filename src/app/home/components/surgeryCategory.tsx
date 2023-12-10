import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/joy';


interface SurgeryCategoryProps {
  svg: string;
  title: string;
  onSelect: () => void;
  isSelected: boolean;
}

const SurgeryCategory: React.FC<SurgeryCategoryProps> = ({
  svg,
  title,
  onSelect,
  isSelected,
}) => {
  const [internalSelected, setInternalSelected] = React.useState<boolean>(isSelected);

  React.useEffect(() => {
    setInternalSelected(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    if (internalSelected) {
      // If the category is being unselected, reset to 'All Procedures'
      onSelect(); // Call the callback function when the category is unselected
    } else {
      // If the category is being selected, update the internal state and set the selected category
      setInternalSelected(!internalSelected);
      onSelect(); // Call the callback function when the category is selected
    }
  };


  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center cursor-pointer w-20 text-center pt-2 pb-2 ${
          internalSelected ? 'bg-slate-200 rounded-lg' : 'w-20'
        }`}
        onClick={handleClick}
      >
        <Image src={svg} alt={title} height={40} width={40}/>
        <Typography level='body-xs'>{title}</Typography>
      </div>
    </div>
  );
};

export default SurgeryCategory;