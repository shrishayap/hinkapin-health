import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Typography } from '@mui/joy';
import Link from 'next/link';


interface SurgeryCategoryProps {
  svg: StaticImageData;
  title: string;
  link: string;
  isSelected: boolean;
}

const SurgeryCategory: React.FC<SurgeryCategoryProps> = ({
  svg,
  title,
  link,
  isSelected,
}) => {


  return (
    <Link href={link}>
      <div className="relative">
        <div
          className={`flex flex-col items-center cursor-pointer w-20 text-center pt-2 pb-2 ${isSelected ? 'bg-slate-200 rounded-lg' : 'w-20'
            }`}
        >

          <Image src={svg} alt={title} height={40} width={40} />
          <Typography level='body-xs'>{title}</Typography>
        </div>

      </div>
    </Link>
  );
};

export default SurgeryCategory;