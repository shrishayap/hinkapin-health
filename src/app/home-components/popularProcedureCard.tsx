import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from "@mui/joy/Button/Button";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';

interface PopularProcedureCardProps {
    name: string;
    price: number | string;
    icon: StaticImageData;
    href: string;
}

export const PopularProcedureCard = ({ name, price, icon, href }: PopularProcedureCardProps) => {
    return (
        <div className="flex flex-col items-center space-y-4 p-4 border-2 rounded-lg justify-end bg-white hover">
            <div className='h-full'>
                <h2 className="text-center">{name}</h2>
            </div>
            <Image alt={name} src={icon} width={50} height={50} />
            <p className="text-2xl font-bold font-serif">{price}</p>
            <Link href={href}>
                <Button endDecorator={<KeyboardArrowRight />} variant="outlined" color='neutral' >
                    Learn More
                </Button>
            </Link>
        </div>
    )
}

export default PopularProcedureCard;